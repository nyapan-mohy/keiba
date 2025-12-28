#!/usr/bin/env node
/**
 * 有馬記念2025 予測ツール
 * 過去10年のデータ傾向に基づいたAI予測
 *
 * 使用方法:
 *   npx tsx src/index.ts          # 通常予測
 *   npx tsx src/index.ts --detail # 詳細分析付き
 */

import { horses2025 } from './data/horses2025.js';
import { predictRace, DEFAULT_CONFIG } from './scoring/index.js';
import {
  printHeader,
  printPredictionTable,
  printRecommendations,
  printDetailedAnalysis,
  printSpotlight,
  printFooter,
} from './display.js';

function main(): void {
  const args = process.argv.slice(2);
  const showDetail = args.includes('--detail') || args.includes('-d');

  // ヘッダー表示
  printHeader();

  // 予測実行
  console.log('予測モデル実行中...\n');

  const result = predictRace(horses2025, DEFAULT_CONFIG);

  // 予測結果表示
  printPredictionTable(result);

  // 推奨買い目表示
  printRecommendations(result);

  // 詳細分析（オプション）
  if (showDetail) {
    printDetailedAnalysis(result);
  }

  // 注目ポイント
  printSpotlight(result);

  // フッター
  printFooter();

  // 予測サマリー
  const top3 = result.scores.slice(0, 3);
  console.log('予測完了!');
  console.log(`本命: ${top3[0].number}番 ${top3[0].name}`);
  console.log(`対抗: ${top3[1].number}番 ${top3[1].name}`);
  console.log(`単穴: ${top3[2].number}番 ${top3[2].name}`);
}

main();
