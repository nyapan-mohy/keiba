/**
 * 有馬記念2025 出走馬データ
 * 2025年12月28日 中山11R 芝2500m
 */

import type { Horse } from '../types.js';

export const horses2025: Horse[] = [
  {
    number: 1,
    waku: 1,
    name: 'エキサイトバイオ',
    gender: '牡',
    age: 3,
    sire: 'レイデオロ',
    jockey: '荻野極',
    trainer: '今野貞一',
    stable: '美浦',
    lastRaceResult: 3, // 菊花賞3着
    secondLastRaceResult: 1, // セントライト記念1着
    lastRaceName: '菊花賞',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: false,
    weight: 55,
  },
  {
    number: 2,
    waku: 1,
    name: 'シンエンペラー',
    gender: '牡',
    age: 4,
    sire: 'Siyouni',
    jockey: '坂井瑠星',
    trainer: '矢作芳人',
    stable: '栗東',
    lastRaceResult: 3, // 凱旋門賞3着
    secondLastRaceResult: 2, // 宝塚記念2着
    lastRaceName: '凱旋門賞',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: true,
    weight: 57,
  },
  {
    number: 3,
    waku: 2,
    name: 'ジャスティンパレス',
    gender: '牡',
    age: 6,
    sire: 'ディープインパクト',
    jockey: '団野大成',
    trainer: '杉山晴紀',
    stable: '栗東',
    lastRaceResult: 5, // ジャパンC 5着
    secondLastRaceResult: 4, // 天皇賞秋4着
    lastRaceName: 'ジャパンC',
    g1Wins: 2, // 天皇賞春、宝塚記念
    arimaExperience: true, // 2023年6着、2024年12着
    jockeyChange: true,
    weight: 57,
  },
  {
    number: 4,
    waku: 2,
    name: 'ミュージアムマイル',
    gender: '牡',
    age: 3,
    sire: 'リオンディーズ',
    jockey: 'C.デムーロ',
    trainer: '高柳大輔',
    stable: '栗東',
    lastRaceResult: 2, // 天皇賞秋2着
    secondLastRaceResult: 6, // 日本ダービー6着
    lastRaceName: '天皇賞秋',
    g1Wins: 1, // 皐月賞
    arimaExperience: false,
    jockeyChange: false,
    weight: 55,
  },
  {
    number: 5,
    waku: 3,
    name: 'レガレイラ',
    gender: '牝',
    age: 4,
    sire: 'スワーヴリチャード',
    jockey: 'C.ルメール',
    trainer: '木村哲也',
    stable: '美浦',
    lastRaceResult: 1, // エリザベス女王杯1着
    secondLastRaceResult: 3, // 天皇賞秋3着
    lastRaceName: 'エリザベス女王杯',
    g1Wins: 2, // ホープフルS、有馬記念
    arimaExperience: true, // 2024年1着
    jockeyChange: false,
    weight: 55,
  },
  {
    number: 6,
    waku: 3,
    name: 'メイショウタバル',
    gender: '牡',
    age: 4,
    sire: 'ゴールドシップ',
    jockey: '武豊',
    trainer: '石橋守',
    stable: '栗東',
    lastRaceResult: 7, // 天皇賞秋7着
    secondLastRaceResult: 1, // 宝塚記念1着
    lastRaceName: '天皇賞秋',
    g1Wins: 1, // 宝塚記念
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 7,
    waku: 4,
    name: 'サンライズジパング',
    gender: '牡',
    age: 4,
    sire: 'キズナ',
    jockey: '鮫島克駿',
    trainer: '前川黛也',
    stable: '栗東',
    lastRaceResult: 2, // チャンピオンズC 2着
    secondLastRaceResult: 1, // JBCクラシック1着
    lastRaceName: 'チャンピオンズC',
    g1Wins: 1, // JBCクラシック（ダートG1）
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 8,
    waku: 4,
    name: 'シュヴァリエローズ',
    gender: '牡',
    age: 7,
    sire: 'ディープインパクト',
    jockey: '北村友一',
    trainer: '清水久詞',
    stable: '栗東',
    lastRaceResult: 5, // ジャパンC 5着
    secondLastRaceResult: 5, // 天皇賞秋5着
    lastRaceName: 'ジャパンC',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 9,
    waku: 5,
    name: 'ダノンデサイル',
    gender: '牡',
    age: 4,
    sire: 'エピファネイア',
    jockey: '戸崎圭太',
    trainer: '安田翔伍',
    stable: '栗東',
    lastRaceResult: 3, // ジャパンC 3着
    secondLastRaceResult: 7, // 天皇賞秋7着
    lastRaceName: 'ジャパンC',
    g1Wins: 1, // ダービー
    arimaExperience: true, // 2024年5着
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 10,
    waku: 5,
    name: 'コスモキュランダ',
    gender: '牡',
    age: 4,
    sire: 'アルアイン',
    jockey: '横山武史',
    trainer: '加藤士津八',
    stable: '美浦',
    lastRaceResult: 5, // ジャパンC 5着
    secondLastRaceResult: 5, // 天皇賞秋5着
    lastRaceName: 'ジャパンC',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: true,
    weight: 57,
  },
  {
    number: 11,
    waku: 6,
    name: 'ミステリーウェイ',
    gender: 'セ',
    age: 7,
    sire: 'ジャスタウェイ',
    jockey: '松本大輝',
    trainer: '小林真也',
    stable: '美浦',
    lastRaceResult: 8, // ジャパンC 8着
    secondLastRaceResult: 4, // 天皇賞秋4着
    lastRaceName: 'ジャパンC',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 12,
    waku: 6,
    name: 'マイネルエンペラー',
    gender: '牡',
    age: 5,
    sire: 'ゴールドシップ',
    jockey: '丹内祐次',
    trainer: '手塚貴久',
    stable: '美浦',
    lastRaceResult: 4, // ステイヤーズS 4着
    secondLastRaceResult: 3, // アルゼンチン共和国杯3着
    lastRaceName: 'ステイヤーズS',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 13,
    waku: 7,
    name: 'アドマイヤテラ',
    gender: '牡',
    age: 4,
    sire: 'レイデオロ',
    jockey: '川田将雅',
    trainer: '友道康夫',
    stable: '栗東',
    lastRaceResult: 4, // ジャパンC 4着
    secondLastRaceResult: 6, // 天皇賞秋6着
    lastRaceName: 'ジャパンC',
    g1Wins: 0,
    arimaExperience: false,
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 14,
    waku: 7,
    name: 'アラタ',
    gender: '牡',
    age: 8,
    sire: 'キングカメハメハ',
    jockey: '大野拓弥',
    trainer: '加藤征弘',
    stable: '美浦',
    lastRaceResult: 4, // ステイヤーズS 4着
    secondLastRaceResult: 2, // アルゼンチン共和国杯2着
    lastRaceName: 'ステイヤーズS',
    g1Wins: 0,
    arimaExperience: true, // 過去出走経験あり
    jockeyChange: false,
    weight: 57,
  },
  {
    number: 15,
    waku: 8,
    name: 'エルトンバローズ',
    gender: '牡',
    age: 5,
    sire: 'ディープブリランテ',
    jockey: '西村淳也',
    trainer: '杉山晴紀',
    stable: '栗東',
    lastRaceResult: 2, // 金鯱賞2着
    secondLastRaceResult: 8, // 天皇賞秋8着
    lastRaceName: '金鯱賞',
    g1Wins: 0,
    arimaExperience: true, // 2024年11着
    jockeyChange: true,
    weight: 57,
  },
  {
    number: 16,
    waku: 8,
    name: 'タスティエーラ',
    gender: '牡',
    age: 5,
    sire: 'サトノクラウン',
    jockey: '松山弘平',
    trainer: '堀宣行',
    stable: '美浦',
    lastRaceResult: 6, // ジャパンC 6着
    secondLastRaceResult: 6, // 天皇賞秋6着
    lastRaceName: 'ジャパンC',
    g1Wins: 1, // ダービー
    arimaExperience: true, // 2023年2着、2024年3着
    jockeyChange: true,
    weight: 57,
  },
];

export default horses2025;
