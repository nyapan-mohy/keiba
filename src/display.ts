/**
 * 有馬記念2025 予測結果表示
 */

import Table from 'cli-table3';
import chalk from 'chalk';
import type { PredictionResult, ScoreResult } from './types.js';

/**
 * ヘッダーを表示
 */
export function printHeader(): void {
  console.log(chalk.yellow('\n' + '='.repeat(70)));
  console.log(chalk.yellow.bold('  有馬記念 2025 予測ツール'));
  console.log(chalk.yellow.bold('  Arima Kinen 2025 Prediction Tool'));
  console.log(chalk.yellow('='.repeat(70)));
  console.log(chalk.gray('  中山競馬場 芝2500m | 2025年12月28日 15:40発走'));
  console.log(chalk.gray('  過去10年のデータ傾向に基づく予測\n'));
}

/**
 * 予測結果のメインテーブルを表示
 */
export function printPredictionTable(result: PredictionResult): void {
  console.log(chalk.cyan.bold('\n【予測順位】\n'));

  const table = new Table({
    head: [
      chalk.white('順位'),
      chalk.white('馬番'),
      chalk.white('馬名'),
      chalk.white('総合'),
      chalk.white('枠'),
      chalk.white('齢'),
      chalk.white('騎手'),
      chalk.white('厩舎'),
      chalk.white('血統'),
      chalk.white('近走'),
      chalk.white('信頼'),
    ],
    colWidths: [6, 6, 18, 7, 5, 5, 7, 7, 7, 7, 6],
    style: {
      head: [],
      border: [],
    },
  });

  result.scores.forEach((score) => {
    const rankDisplay = getRankDisplay(score.predictedRank);
    const confidenceDisplay = getConfidenceDisplay(score.confidence);

    table.push([
      rankDisplay,
      score.number.toString(),
      score.name,
      chalk.yellow(score.totalScore.toFixed(1)),
      getScoreColor(score.wakuScore),
      getScoreColor(score.ageScore),
      getScoreColor(score.jockeyScore),
      getScoreColor(score.trainerScore),
      getScoreColor(score.bloodlineScore),
      getScoreColor(score.recentFormScore),
      confidenceDisplay,
    ]);
  });

  console.log(table.toString());
}

/**
 * 推奨買い目を表示
 */
export function printRecommendations(result: PredictionResult): void {
  console.log(chalk.magenta.bold('\n【推奨買い目】\n'));

  const { recommendations, scores } = result;

  // 馬番から馬名を取得するヘルパー
  const getName = (num: number) => scores.find(s => s.number === num)?.name ?? '';

  console.log(chalk.green('■ 単勝（本命）'));
  recommendations.win.forEach((num, i) => {
    const mark = i === 0 ? '◎' : '○';
    console.log(`  ${mark} ${num}番 ${getName(num)}`);
  });

  console.log(chalk.green('\n■ 複勝（堅実）'));
  recommendations.place.forEach((num, i) => {
    const marks = ['◎', '○', '▲'];
    console.log(`  ${marks[i]} ${num}番 ${getName(num)}`);
  });

  console.log(chalk.green('\n■ 馬連（BOX）'));
  recommendations.quinella.forEach(([a, b]) => {
    console.log(`  ${a}-${b} (${getName(a)} - ${getName(b)})`);
  });

  console.log(chalk.green('\n■ 三連複'));
  recommendations.trio.forEach(([a, b, c]) => {
    console.log(`  ${a}-${b}-${c} (${getName(a)} - ${getName(b)} - ${getName(c)})`);
  });

  if (recommendations.wide.length > 0) {
    console.log(chalk.yellow('\n■ ワイド（穴狙い）'));
    recommendations.wide.forEach(([a, b]) => {
      console.log(`  ${a}-${b} (${getName(a)} - ${getName(b)})`);
    });
  }
}

/**
 * 詳細分析を表示
 */
export function printDetailedAnalysis(result: PredictionResult): void {
  console.log(chalk.cyan.bold('\n【上位馬 詳細分析】\n'));

  const top5 = result.scores.slice(0, 5);

  top5.forEach((score, index) => {
    const rank = index + 1;
    console.log(chalk.yellow(`━━━ ${rank}位: ${score.number}番 ${score.name} (総合スコア: ${score.totalScore.toFixed(1)}) ━━━`));

    const strengths: string[] = [];
    const weaknesses: string[] = [];

    // 強み・弱みを分析
    if (score.wakuScore >= 80) strengths.push('枠順◎');
    else if (score.wakuScore <= 50) weaknesses.push('枠順△');

    if (score.ageScore >= 90) strengths.push('年齢◎');
    else if (score.ageScore <= 50) weaknesses.push('年齢△');

    if (score.jockeyScore >= 85) strengths.push('騎手◎');
    else if (score.jockeyScore <= 60) weaknesses.push('騎手△');

    if (score.trainerScore >= 85) strengths.push('厩舎◎');
    else if (score.trainerScore <= 60) weaknesses.push('厩舎△');

    if (score.bloodlineScore >= 80) strengths.push('血統◎');
    else if (score.bloodlineScore <= 55) weaknesses.push('血統△');

    if (score.recentFormScore >= 80) strengths.push('近走◎');
    else if (score.recentFormScore <= 50) weaknesses.push('近走△');

    if (score.g1Score >= 75) strengths.push('G1実績◎');

    if (score.continuityScore >= 100) strengths.push('継続騎乗◎');
    else weaknesses.push('乗り替わり');

    console.log(chalk.green(`  強み: ${strengths.join(', ') || 'なし'}`));
    console.log(chalk.red(`  弱み: ${weaknesses.join(', ') || 'なし'}`));
    console.log('');
  });
}

/**
 * 注目馬を表示
 */
export function printSpotlight(result: PredictionResult): void {
  console.log(chalk.yellow.bold('\n【注目ポイント】\n'));

  const top1 = result.scores[0];
  console.log(chalk.white.bold(`本命: ${top1.number}番 ${top1.name}`));
  console.log(chalk.gray('  → 総合スコアトップ。信頼度の高い軸馬候補\n'));

  // 穴馬候補
  const darkHorses = result.scores.filter(s => s.totalScore >= 55 && s.predictedRank >= 6);
  if (darkHorses.length > 0) {
    console.log(chalk.white.bold('穴馬候補:'));
    darkHorses.slice(0, 3).forEach(dh => {
      console.log(chalk.gray(`  ${dh.number}番 ${dh.name} (スコア: ${dh.totalScore.toFixed(1)})`));
    });
  }
}

/**
 * フッターを表示
 */
export function printFooter(): void {
  console.log(chalk.gray('\n' + '-'.repeat(70)));
  console.log(chalk.gray('※ この予測は過去データに基づく参考情報です'));
  console.log(chalk.gray('※ 馬券購入は自己責任でお願いします'));
  console.log(chalk.gray('※ 競馬は余裕資金で楽しみましょう'));
  console.log(chalk.yellow('\n' + '='.repeat(70) + '\n'));
}

// ヘルパー関数
function getRankDisplay(rank: number): string {
  if (rank === 1) return chalk.yellow.bold('1');
  if (rank === 2) return chalk.white.bold('2');
  if (rank === 3) return chalk.red.bold('3');
  return rank.toString();
}

function getConfidenceDisplay(confidence: 'A' | 'B' | 'C'): string {
  switch (confidence) {
    case 'A': return chalk.green.bold('A');
    case 'B': return chalk.yellow('B');
    case 'C': return chalk.gray('C');
  }
}

function getScoreColor(score: number): string {
  if (score >= 85) return chalk.green(score.toString());
  if (score >= 70) return chalk.yellow(score.toString());
  if (score >= 50) return chalk.white(score.toString());
  return chalk.red(score.toString());
}
