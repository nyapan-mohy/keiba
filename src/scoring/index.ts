/**
 * 有馬記念2025 スコアリングエンジン
 * 過去10年のデータ傾向に基づいた予測スコアリング
 */

import type { Horse, ScoreResult, ScoringConfig, PredictionResult } from '../types.js';

/** デフォルトの重み設定（バックテスト結果に基づき改善） */
export const DEFAULT_CONFIG: ScoringConfig = {
  wakuWeight: 8,       // 枠順は重要だが過大評価しない（外枠でも好走あり）
  ageWeight: 10,       // 年齢
  jockeyWeight: 18,    // 騎手は重要
  trainerWeight: 12,   // 厩舎（木村哲也、友道など実績厩舎は強い）
  bloodlineWeight: 10, // 血統
  recentFormWeight: 12,// 近走成績（過大評価しない、実力馬は巻き返す）
  g1Weight: 20,        // G1実績を最重視（底力勝負）
  continuityWeight: 10,// 継続騎乗（乗り替わりでも実力騎手なら問題なし）
};

/**
 * 枠順スコア
 * 過去データ: 5枠が最強だが、8枠でも好走例あり（2023,2024年とも8枠16番が2着）
 * → 外枠のペナルティを緩和
 */
export function calcWakuScore(horse: Horse): number {
  const wakuScores: Record<number, number> = {
    1: 70,  // 内枠は有利だが最内は揉まれるリスク
    2: 65,  //
    3: 80,  // 好枠
    4: 90,  // 好枠
    5: 100, // 最強！
    6: 75,  // まずまず
    7: 60,  // 外枠だが致命的ではない
    8: 55,  // 外枠だが2023,2024年とも2着あり（ペナルティ緩和）
  };
  return wakuScores[horse.waku] ?? 65;
}

/**
 * 馬齢スコア
 * 過去データ: 3-6歳のみ好走、6歳は有馬記念経験者限定
 */
export function calcAgeScore(horse: Horse): number {
  // 3歳：G1連対歴またはG1で1番人気経験が必要
  if (horse.age === 3) {
    if (horse.g1Wins >= 1 || horse.lastRaceResult <= 2) {
      return 80;
    }
    return 50;
  }

  // 4歳：最も活躍する年齢
  if (horse.age === 4) {
    return 100;
  }

  // 5歳：まだ好走可能
  if (horse.age === 5) {
    return 85;
  }

  // 6歳：有馬記念経験者のみ
  if (horse.age === 6) {
    return horse.arimaExperience ? 70 : 30;
  }

  // 7歳以上：過去10年で好走例なし
  if (horse.age >= 7) {
    return 20;
  }

  return 50;
}

/**
 * 騎手スコア
 * 中山芝2500m成績に基づく
 * ルメール: 勝率38.5%、複勝率76.9%で最強
 */
export function calcJockeyScore(horse: Horse): number {
  const jockeyScores: Record<string, number> = {
    'C.ルメール': 100,    // 中山芝2500m最強
    'C.デムーロ': 85,     // 実績あり
    '川田将雅': 90,       // トップジョッキー
    '武豊': 88,           // レジェンド
    '戸崎圭太': 82,       // 関東リーディング
    '横山武史': 80,       // 成長株
    '松山弘平': 78,       // 安定
    '坂井瑠星': 75,       // 上昇中
    '鮫島克駿': 72,       // 勢いあり
    '団野大成': 68,       // 中堅
    '北村友一': 65,       // ベテラン
    '西村淳也': 62,       // 中堅
    '大野拓弥': 55,       //
    '荻野極': 50,         //
    '丹内祐次': 48,       //
    '松本大輝': 45,       //
  };
  return jockeyScores[horse.jockey] ?? 50;
}

/**
 * 厩舎スコア
 * 木村哲也厩舎: 勝率45.5%、複勝率54.5%で最強
 */
export function calcTrainerScore(horse: Horse): number {
  const trainerScores: Record<string, number> = {
    '木村哲也': 100,      // 中山芝2500m最強
    '堀宣行': 90,         // 名門
    '友道康夫': 88,       // 実績あり
    '杉山晴紀': 85,       // ジャスティンパレス等
    '安田翔伍': 82,       // ダノンデサイル
    '矢作芳人': 80,       // シンエンペラー
    '高柳大輔': 75,       //
    '石橋守': 72,         // メイショウタバル
    '前川黛也': 65,       //
    '清水久詞': 62,       //
    '手塚貴久': 60,       //
    '加藤士津八': 58,     //
    '加藤征弘': 55,       //
    '今野貞一': 52,       //
    '小林真也': 50,       //
  };
  return trainerScores[horse.trainer] ?? 50;
}

/**
 * 血統スコア
 * キズナ産駒: 複勝率41.7%、ディープ系も好成績
 */
export function calcBloodlineScore(horse: Horse): number {
  const sireScores: Record<string, number> = {
    'キズナ': 100,            // 中山芝2500m最強血統
    'ディープインパクト': 90, // 安定の好成績
    'エピファネイア': 85,     // シンボリクリスエス系
    'スワーヴリチャード': 82, // ハーツクライ系
    'ゴールドシップ': 78,     // ステイヤー血統
    'サトノクラウン': 75,     // Marju系
    'レイデオロ': 70,         // キンカメ系
    'リオンディーズ': 68,     // キンカメ系
    'アルアイン': 65,         // ディープ系
    'ディープブリランテ': 62, // ディープ系
    'ジャスタウェイ': 60,     // ハーツクライ系
    'キングカメハメハ': 58,   // 種牡馬引退
    'Siyouni': 55,            // 欧州血統
  };
  return sireScores[horse.sire] ?? 50;
}

/**
 * 近走成績スコア
 * 過去データ: 近2走両方6着以下は好走ゼロ
 */
export function calcRecentFormScore(horse: Horse): number {
  const last = horse.lastRaceResult;
  const secondLast = horse.secondLastRaceResult;

  // 近2走両方6着以下は好走不可
  if (last >= 6 && secondLast >= 6) {
    return 10;
  }

  // 前走1着は高評価
  if (last === 1) {
    return 100;
  }

  // 前走2着
  if (last === 2) {
    return 90;
  }

  // 前走3着
  if (last === 3) {
    return 80;
  }

  // 前走4-5着だが前々走好走
  if (last <= 5 && secondLast <= 3) {
    return 70;
  }

  // 前走4-5着
  if (last <= 5) {
    return 60;
  }

  // 前走6着以下だが前々走好走
  if (secondLast <= 3) {
    return 50;
  }

  return 30;
}

/**
 * G1実績スコア
 * 有馬記念は実力勝負。G1勝ち馬は底力が違う
 */
export function calcG1Score(horse: Horse): number {
  // G1を3勝以上
  if (horse.g1Wins >= 3) {
    return 100;
  }
  // G1を2勝
  if (horse.g1Wins === 2) {
    return 90;
  }
  // G1を1勝
  if (horse.g1Wins === 1) {
    return 80;
  }
  // 有馬記念出走経験（コース適性あり）
  if (horse.arimaExperience) {
    return 65;
  }
  // G1未勝利
  return 40;
}

/**
 * 継続騎乗スコア
 * 過去データ: 継続騎乗が8勝、乗り替わり2勝
 * ただし、乗り替わりでも実力騎手（ルメール、デムーロなど）なら影響小
 */
export function calcContinuityScore(horse: Horse): number {
  if (!horse.jockeyChange) {
    return 100; // 継続騎乗は高評価
  }
  // 乗り替わりでも実力騎手ならペナルティ軽減
  const topJockeys = ['C.ルメール', 'C.デムーロ', '川田将雅', '武豊', 'R.ムーア', 'D.レーン', 'T.マーカンド'];
  if (topJockeys.includes(horse.jockey)) {
    return 70; // 実力騎手への乗り替わりは許容
  }
  return 50; // その他の乗り替わりは中程度のペナルティ
}

/**
 * 総合スコアを計算
 */
export function calculateTotalScore(horse: Horse, config: ScoringConfig = DEFAULT_CONFIG): ScoreResult {
  const wakuScore = calcWakuScore(horse);
  const ageScore = calcAgeScore(horse);
  const jockeyScore = calcJockeyScore(horse);
  const trainerScore = calcTrainerScore(horse);
  const bloodlineScore = calcBloodlineScore(horse);
  const recentFormScore = calcRecentFormScore(horse);
  const g1Score = calcG1Score(horse);
  const continuityScore = calcContinuityScore(horse);

  // 重み付き平均
  const totalWeight =
    config.wakuWeight +
    config.ageWeight +
    config.jockeyWeight +
    config.trainerWeight +
    config.bloodlineWeight +
    config.recentFormWeight +
    config.g1Weight +
    config.continuityWeight;

  const totalScore = (
    (wakuScore * config.wakuWeight) +
    (ageScore * config.ageWeight) +
    (jockeyScore * config.jockeyWeight) +
    (trainerScore * config.trainerWeight) +
    (bloodlineScore * config.bloodlineWeight) +
    (recentFormScore * config.recentFormWeight) +
    (g1Score * config.g1Weight) +
    (continuityScore * config.continuityWeight)
  ) / totalWeight;

  return {
    number: horse.number,
    name: horse.name,
    totalScore: Math.round(totalScore * 100) / 100,
    wakuScore,
    ageScore,
    jockeyScore,
    trainerScore,
    bloodlineScore,
    recentFormScore,
    g1Score,
    continuityScore,
    predictedRank: 0, // 後で設定
    confidence: 'C',   // 後で設定
  };
}

/**
 * 全馬のスコアを計算してランキング
 */
export function predictRace(horses: Horse[], config: ScoringConfig = DEFAULT_CONFIG): PredictionResult {
  // 各馬のスコアを計算
  const scores = horses.map(h => calculateTotalScore(h, config));

  // スコア順にソート
  scores.sort((a, b) => b.totalScore - a.totalScore);

  // ランクと信頼度を設定
  scores.forEach((score, index) => {
    score.predictedRank = index + 1;

    // 信頼度設定
    if (score.totalScore >= 80) {
      score.confidence = 'A';
    } else if (score.totalScore >= 65) {
      score.confidence = 'B';
    } else {
      score.confidence = 'C';
    }
  });

  // 推奨買い目を生成
  const top3 = scores.slice(0, 3);
  const top5 = scores.slice(0, 5);
  const darkHorses = scores.filter(s => s.totalScore >= 60 && s.predictedRank > 5).slice(0, 2);

  const recommendations = {
    // 単勝: 上位2頭
    win: top3.slice(0, 2).map(s => s.number),
    // 複勝: 上位3頭
    place: top3.map(s => s.number),
    // 馬連: 上位3頭のBOX
    quinella: [
      [top3[0].number, top3[1].number] as [number, number],
      [top3[0].number, top3[2].number] as [number, number],
      [top3[1].number, top3[2].number] as [number, number],
    ],
    // 三連複: 上位3頭+穴馬
    trio: [
      [top3[0].number, top3[1].number, top3[2].number] as [number, number, number],
      ...(darkHorses.length > 0 ? [
        [top3[0].number, top3[1].number, darkHorses[0].number] as [number, number, number],
      ] : []),
    ],
    // ワイド穴狙い: 上位馬×穴馬
    wide: darkHorses.map(dh => [top3[0].number, dh.number] as [number, number]),
  };

  return {
    raceName: '第70回 有馬記念 (GI)',
    date: '2025年12月28日',
    predictedAt: new Date().toISOString(),
    scores,
    recommendations,
  };
}
