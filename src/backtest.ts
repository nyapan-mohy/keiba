#!/usr/bin/env node
/**
 * 有馬記念予測モデル バックテスト
 * 過去5年分（2020-2024）のデータで正答率を検証
 */

import chalk from 'chalk';
import Table from 'cli-table3';
import { pastRaces, type PastRaceResult } from './data/pastRaces.js';
import { predictRace, DEFAULT_CONFIG } from './scoring/index.js';

interface BacktestResult {
  year: number;
  /** 予測1位が実際に3着以内に入ったか */
  top1In3: boolean;
  /** 予測上位3頭のうち何頭が実際に3着以内か */
  top3Hits: number;
  /** 1着的中 */
  win: boolean;
  /** 予測1位の実際の着順 */
  top1ActualRank: number;
  /** 予測上位3頭の実際の着順 */
  top3ActualRanks: number[];
  /** 実際の1着馬の予測順位 */
  winnerPredictedRank: number;
  /** 実際の2着馬の予測順位 */
  secondPredictedRank: number;
  /** 実際の3着馬の予測順位 */
  thirdPredictedRank: number;
}

function runBacktest(race: PastRaceResult): BacktestResult {
  // 予測実行
  const prediction = predictRace(race.horses, DEFAULT_CONFIG);
  const predictedTop3 = prediction.scores.slice(0, 3).map(s => s.number);

  // 実際の着順
  const [first, second, third] = race.actualResult;

  // 予測順位から実際の着順を取得するマップ
  const numberToActualRank = new Map<number, number>();
  race.actualResult.forEach((num, idx) => {
    numberToActualRank.set(num, idx + 1);
  });

  // 予測上位3頭の実際の着順
  const top3ActualRanks = predictedTop3.map(num => {
    const rank = numberToActualRank.get(num);
    if (rank) return rank;
    // 3着以内でなければ、出走馬リストから順位を推定
    const horseIndex = race.horses.findIndex(h => h.number === num);
    return horseIndex >= 0 ? horseIndex + 4 : 99; // 4位以下として扱う
  });

  // 実際の上位3頭が予測で何位だったか
  const predictedRankMap = new Map<number, number>();
  prediction.scores.forEach((s, idx) => {
    predictedRankMap.set(s.number, idx + 1);
  });

  return {
    year: race.year,
    top1In3: race.actualResult.includes(predictedTop3[0]),
    top3Hits: predictedTop3.filter(num => race.actualResult.includes(num)).length,
    win: predictedTop3[0] === first,
    top1ActualRank: top3ActualRanks[0],
    top3ActualRanks,
    winnerPredictedRank: predictedRankMap.get(first) ?? 99,
    secondPredictedRank: predictedRankMap.get(second) ?? 99,
    thirdPredictedRank: predictedRankMap.get(third) ?? 99,
  };
}

function printResults(results: BacktestResult[]): void {
  console.log(chalk.yellow('\n' + '='.repeat(70)));
  console.log(chalk.yellow.bold('  有馬記念予測モデル バックテスト結果'));
  console.log(chalk.yellow('='.repeat(70) + '\n'));

  // 詳細テーブル
  const table = new Table({
    head: [
      chalk.white('年'),
      chalk.white('1着的中'),
      chalk.white('Top3命中'),
      chalk.white('予測1位→'),
      chalk.white('1着の予測順'),
      chalk.white('2着の予測順'),
      chalk.white('3着の予測順'),
    ],
    colWidths: [8, 10, 12, 12, 14, 14, 14],
  });

  results.forEach(r => {
    table.push([
      r.year.toString(),
      r.win ? chalk.green('◎') : chalk.red('✗'),
      `${r.top3Hits}/3 ${r.top3Hits >= 2 ? chalk.green('◎') : r.top3Hits === 1 ? chalk.yellow('○') : chalk.red('✗')}`,
      r.top1In3 ? chalk.green(`${r.top1ActualRank}着`) : chalk.red(`${r.top1ActualRank}着`),
      r.winnerPredictedRank <= 3 ? chalk.green(`${r.winnerPredictedRank}位`) : chalk.yellow(`${r.winnerPredictedRank}位`),
      r.secondPredictedRank <= 5 ? chalk.green(`${r.secondPredictedRank}位`) : chalk.yellow(`${r.secondPredictedRank}位`),
      r.thirdPredictedRank <= 5 ? chalk.green(`${r.thirdPredictedRank}位`) : chalk.yellow(`${r.thirdPredictedRank}位`),
    ]);
  });

  console.log(table.toString());

  // サマリー統計
  console.log(chalk.cyan.bold('\n【正答率サマリー】\n'));

  const winCount = results.filter(r => r.win).length;
  const top1In3Count = results.filter(r => r.top1In3).length;
  const avgTop3Hits = results.reduce((sum, r) => sum + r.top3Hits, 0) / results.length;
  const winnerInTop3 = results.filter(r => r.winnerPredictedRank <= 3).length;
  const winnerInTop5 = results.filter(r => r.winnerPredictedRank <= 5).length;
  const top3InTop5 = results.filter(r =>
    r.winnerPredictedRank <= 5 && r.secondPredictedRank <= 5 && r.thirdPredictedRank <= 5
  ).length;

  console.log(`  1着的中率:        ${winCount}/${results.length} (${(winCount / results.length * 100).toFixed(1)}%)`);
  console.log(`  予測1位の複勝率:  ${top1In3Count}/${results.length} (${(top1In3Count / results.length * 100).toFixed(1)}%)`);
  console.log(`  予測Top3命中数:   平均 ${avgTop3Hits.toFixed(2)}/3頭`);
  console.log(`  1着馬がTop3以内:  ${winnerInTop3}/${results.length} (${(winnerInTop3 / results.length * 100).toFixed(1)}%)`);
  console.log(`  1着馬がTop5以内:  ${winnerInTop5}/${results.length} (${(winnerInTop5 / results.length * 100).toFixed(1)}%)`);
  console.log(`  3着以内全部Top5:  ${top3InTop5}/${results.length} (${(top3InTop5 / results.length * 100).toFixed(1)}%)`);

  // 馬券シミュレーション
  console.log(chalk.magenta.bold('\n【馬券回収シミュレーション】\n'));

  let quinellaHits = 0;
  let trioHits = 0;

  results.forEach(r => {
    // 馬連: 予測Top3のうち2頭が1-2着
    const top3 = pastRaces.find(p => p.year === r.year)!.horses
      .map(h => h.number)
      .filter((_, i) => i < 3);

    if (r.winnerPredictedRank <= 3 && r.secondPredictedRank <= 3) {
      quinellaHits++;
    }
    // 3連複: 予測Top3が全員3着以内
    if (r.winnerPredictedRank <= 3 && r.secondPredictedRank <= 3 && r.thirdPredictedRank <= 3) {
      trioHits++;
    }
  });

  console.log(`  馬連的中:   ${quinellaHits}/${results.length} (${(quinellaHits / results.length * 100).toFixed(1)}%)`);
  console.log(`  3連複的中:  ${trioHits}/${results.length} (${(trioHits / results.length * 100).toFixed(1)}%)`);

  // 評価
  console.log(chalk.yellow.bold('\n【モデル評価】\n'));

  const overallScore = (
    (winCount / results.length * 30) +
    (top1In3Count / results.length * 30) +
    (avgTop3Hits / 3 * 20) +
    (winnerInTop5 / results.length * 20)
  );

  if (overallScore >= 60) {
    console.log(chalk.green('  総合評価: A (優秀)'));
    console.log(chalk.green(`  スコア: ${overallScore.toFixed(1)}/100`));
  } else if (overallScore >= 40) {
    console.log(chalk.yellow('  総合評価: B (まずまず)'));
    console.log(chalk.yellow(`  スコア: ${overallScore.toFixed(1)}/100`));
  } else {
    console.log(chalk.red('  総合評価: C (要改善)'));
    console.log(chalk.red(`  スコア: ${overallScore.toFixed(1)}/100`));
  }

  console.log(chalk.gray('\n' + '-'.repeat(70)));
}

// 各年の詳細分析
function printDetailedAnalysis(results: BacktestResult[]): void {
  console.log(chalk.cyan.bold('\n【年別詳細分析】\n'));

  results.forEach(r => {
    const race = pastRaces.find(p => p.year === r.year)!;
    const prediction = predictRace(race.horses, DEFAULT_CONFIG);
    const predictedTop5 = prediction.scores.slice(0, 5);

    console.log(chalk.yellow(`━━━ ${r.year}年 ━━━`));
    console.log(chalk.white('予測Top5:'));
    predictedTop5.forEach((s, i) => {
      const actualRank = race.actualResult.indexOf(s.number);
      const actualStr = actualRank >= 0 ? chalk.green(`→${actualRank + 1}着`) : chalk.gray('→着外');
      console.log(`  ${i + 1}位: ${s.number}番 ${s.name} (${s.totalScore.toFixed(1)}) ${actualStr}`);
    });

    const [first, second, third] = race.actualResult;
    const firstHorse = race.horses.find(h => h.number === first)!;
    const secondHorse = race.horses.find(h => h.number === second)!;
    const thirdHorse = race.horses.find(h => h.number === third)!;

    console.log(chalk.white('実際の結果:'));
    console.log(`  1着: ${first}番 ${firstHorse.name} (予測${r.winnerPredictedRank}位)`);
    console.log(`  2着: ${second}番 ${secondHorse.name} (予測${r.secondPredictedRank}位)`);
    console.log(`  3着: ${third}番 ${thirdHorse.name} (予測${r.thirdPredictedRank}位)`);
    console.log('');
  });
}

function main(): void {
  console.log('バックテスト実行中...\n');

  const results = pastRaces.map(race => runBacktest(race));

  printResults(results);
  printDetailedAnalysis(results);

  console.log(chalk.yellow('='.repeat(70) + '\n'));
}

main();
