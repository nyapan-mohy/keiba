/**
 * 有馬記念2025 予測ツール 型定義
 */

/** 性別 */
export type Gender = '牡' | '牝' | 'セ';

/** 出走馬情報 */
export interface Horse {
  /** 馬番 */
  number: number;
  /** 枠番 */
  waku: number;
  /** 馬名 */
  name: string;
  /** 性別 */
  gender: Gender;
  /** 馬齢 */
  age: number;
  /** 父馬（血統） */
  sire: string;
  /** 騎手 */
  jockey: string;
  /** 調教師 */
  trainer: string;
  /** 厩舎所在地 */
  stable: '美浦' | '栗東';
  /** 前走着順 */
  lastRaceResult: number;
  /** 前々走着順 */
  secondLastRaceResult: number;
  /** 前走レース名 */
  lastRaceName: string;
  /** G1勝利数 */
  g1Wins: number;
  /** 有馬記念出走経験 */
  arimaExperience: boolean;
  /** 前走からの乗り替わり */
  jockeyChange: boolean;
  /** 斤量 */
  weight: number;
}

/** スコアリング結果 */
export interface ScoreResult {
  /** 馬番 */
  number: number;
  /** 馬名 */
  name: string;
  /** 総合スコア */
  totalScore: number;
  /** 枠順スコア */
  wakuScore: number;
  /** 馬齢スコア */
  ageScore: number;
  /** 騎手スコア */
  jockeyScore: number;
  /** 厩舎スコア */
  trainerScore: number;
  /** 血統スコア */
  bloodlineScore: number;
  /** 近走成績スコア */
  recentFormScore: number;
  /** G1実績スコア */
  g1Score: number;
  /** 継続騎乗スコア */
  continuityScore: number;
  /** 予測順位 */
  predictedRank: number;
  /** 信頼度 (A/B/C) */
  confidence: 'A' | 'B' | 'C';
}

/** スコアリング設定 */
export interface ScoringConfig {
  /** 枠順の重み */
  wakuWeight: number;
  /** 馬齢の重み */
  ageWeight: number;
  /** 騎手の重み */
  jockeyWeight: number;
  /** 厩舎の重み */
  trainerWeight: number;
  /** 血統の重み */
  bloodlineWeight: number;
  /** 近走成績の重み */
  recentFormWeight: number;
  /** G1実績の重み */
  g1Weight: number;
  /** 継続騎乗の重み */
  continuityWeight: number;
}

/** 予測結果 */
export interface PredictionResult {
  /** レース名 */
  raceName: string;
  /** 開催日 */
  date: string;
  /** 予測日時 */
  predictedAt: string;
  /** スコア結果一覧 */
  scores: ScoreResult[];
  /** 推奨買い目 */
  recommendations: {
    /** 単勝本命 */
    win: number[];
    /** 複勝おすすめ */
    place: number[];
    /** 馬連おすすめ */
    quinella: [number, number][];
    /** 三連複おすすめ */
    trio: [number, number, number][];
    /** ワイド穴狙い */
    wide: [number, number][];
  };
}
