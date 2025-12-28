/**
 * 有馬記念 過去10年分データ（2015-2024）
 * バックテスト用
 */

import type { Horse } from '../types.js';

/** 過去レースの結果 */
export interface PastRaceResult {
  year: number;
  /** 実際の着順（馬番） */
  actualResult: [number, number, number]; // 1着, 2着, 3着の馬番
  /** 出走馬データ */
  horses: Horse[];
  /** 馬場状態 */
  trackCondition?: '良' | '稍重' | '重' | '不良';
}

// 2024年 有馬記念
export const arima2024: PastRaceResult = {
  year: 2024,
  actualResult: [8, 16, 1], // レガレイラ, シャフリヤール, ダノンデサイル
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'ダノンデサイル', gender: '牡', age: 3, sire: 'エピファネイア', jockey: '横山典弘', trainer: '安田翔伍', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 6, lastRaceName: 'ダービー', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 2, waku: 1, name: 'ドウデュース', gender: '牡', age: 5, sire: 'ハーツクライ', jockey: '武豊', trainer: '友道康夫', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 4, arimaExperience: true, jockeyChange: false, weight: 57 }, // 出走取消
    { number: 3, waku: 2, name: 'アーバンシック', gender: '牡', age: 3, sire: 'スワーヴリチャード', jockey: 'C.ルメール', trainer: '武井亮', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 4, waku: 2, name: 'ブローザホーン', gender: '牡', age: 5, sire: 'エピファネイア', jockey: '菅原明良', trainer: '吉岡辰弥', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 5, waku: 3, name: 'ジャスティンパレス', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: '石橋脩', trainer: '杉山晴紀', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 6, waku: 3, name: 'ローシャムパーク', gender: '牡', age: 5, sire: 'ハービンジャー', jockey: 'T.マーカンド', trainer: '田中博康', stable: '美浦', lastRaceResult: 8, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 7, waku: 4, name: 'スターズオンアース', gender: '牝', age: 5, sire: 'ドゥラメンテ', jockey: '川田将雅', trainer: '高柳瑞樹', stable: '美浦', lastRaceResult: 7, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 55 },
    { number: 8, waku: 4, name: 'レガレイラ', gender: '牝', age: 3, sire: 'スワーヴリチャード', jockey: '戸崎圭太', trainer: '木村哲也', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 6, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: true, weight: 53 },
    { number: 9, waku: 5, name: 'ディープボンド', gender: '牡', age: 7, sire: 'キズナ', jockey: '幸英明', trainer: '大久保龍志', stable: '栗東', lastRaceResult: 7, secondLastRaceResult: 4, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 10, waku: 5, name: 'プログノーシス', gender: '牡', age: 6, sire: 'ディープインパクト', jockey: '三浦皇成', trainer: '中内田充正', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '金鯱賞', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 11, waku: 6, name: 'ベラジオオペラ', gender: '牡', age: 4, sire: 'ロードカナロア', jockey: '横山和生', trainer: '上村洋行', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 5, lastRaceName: '天皇賞秋', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 12, waku: 6, name: 'シュトルーヴェ', gender: '牡', age: 5, sire: 'ドゥラメンテ', jockey: '松山弘平', trainer: '池添学', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 4, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 13, waku: 7, name: 'ダノンベルーガ', gender: '牡', age: 5, sire: 'ハーツクライ', jockey: '北村友一', trainer: '堀宣行', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 6, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 14, waku: 7, name: 'タスティエーラ', gender: '牡', age: 4, sire: 'サトノクラウン', jockey: 'R.ムーア', trainer: '堀宣行', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 15, waku: 8, name: 'ハヤヤッコ', gender: 'セ', age: 8, sire: 'キングカメハメハ', jockey: '吉田豊', trainer: '国枝栄', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 3, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 16, waku: 8, name: 'シャフリヤール', gender: '牡', age: 6, sire: 'ディープインパクト', jockey: 'C.デムーロ', trainer: '藤原英昭', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 4, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
  ],
};

// 2023年 有馬記念
export const arima2023: PastRaceResult = {
  year: 2023,
  actualResult: [5, 16, 4], // ドウデュース, スターズオンアース, タイトルホルダー
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'スルーセブンシーズ', gender: '牝', age: 5, sire: 'ドリームジャーニー', jockey: '池添謙一', trainer: '尾関知人', stable: '美浦', lastRaceResult: 2, secondLastRaceResult: 3, lastRaceName: '凱旋門賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 2, waku: 1, name: 'ソールオリエンス', gender: '牡', age: 3, sire: 'キタサンブラック', jockey: '横山武史', trainer: '手塚貴久', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 2, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 3, waku: 2, name: 'シャフリヤール', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: 'C.デムーロ', trainer: '藤原英昭', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 7, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 4, waku: 2, name: 'タイトルホルダー', gender: '牡', age: 5, sire: 'ドゥラメンテ', jockey: '横山和生', trainer: '栗田徹', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 7, lastRaceName: 'ジャパンC', g1Wins: 3, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 5, waku: 3, name: 'ドウデュース', gender: '牡', age: 4, sire: 'ハーツクライ', jockey: '武豊', trainer: '友道康夫', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 8, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 6, waku: 3, name: 'ディープボンド', gender: '牡', age: 6, sire: 'キズナ', jockey: '幸英明', trainer: '大久保龍志', stable: '栗東', lastRaceResult: 8, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 7, waku: 4, name: 'アイアンバローズ', gender: '牡', age: 6, sire: 'オルフェーヴル', jockey: '石橋脩', trainer: '上村洋行', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 8, waku: 4, name: 'ジャスティンパレス', gender: '牡', age: 4, sire: 'ディープインパクト', jockey: '横山典弘', trainer: '杉山晴紀', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 9, waku: 5, name: 'ホウオウエミーズ', gender: '牝', age: 5, sire: 'ロードカナロア', jockey: '田辺裕信', trainer: '高橋文雅', stable: '美浦', lastRaceResult: 8, secondLastRaceResult: 8, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'プラダリア', gender: '牡', age: 4, sire: 'ディープインパクト', jockey: '菱田裕二', trainer: '池添学', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 9, lastRaceName: '京都大賞典', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 11, waku: 6, name: 'ライラック', gender: '牝', age: 4, sire: 'オルフェーヴル', jockey: '戸崎圭太', trainer: '相沢郁', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 4, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 12, waku: 6, name: 'ヒートオンビート', gender: '牡', age: 6, sire: 'キングカメハメハ', jockey: '坂井瑠星', trainer: '友道康夫', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 13, waku: 7, name: 'タスティエーラ', gender: '牡', age: 3, sire: 'サトノクラウン', jockey: 'D.レーン', trainer: '堀宣行', stable: '美浦', lastRaceResult: 9, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: true, weight: 55 },
    { number: 14, waku: 7, name: 'ハーパー', gender: '牝', age: 3, sire: 'ハーツクライ', jockey: '川田将雅', trainer: '友道康夫', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 53 },
    { number: 15, waku: 8, name: 'ウインマリリン', gender: '牝', age: 6, sire: 'スクリーンヒーロー', jockey: '松岡正海', trainer: '手塚貴久', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 3, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 16, waku: 8, name: 'スターズオンアース', gender: '牝', age: 4, sire: 'ドゥラメンテ', jockey: 'C.ルメール', trainer: '高柳瑞樹', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 55 },
  ],
};

// 2022年 有馬記念
export const arima2022: PastRaceResult = {
  year: 2022,
  actualResult: [9, 13, 7], // イクイノックス, ボルドグフーシュ, ジェラルディーナ
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'ブレークアップ', gender: '牡', age: 5, sire: 'ノヴェリスト', jockey: '石橋脩', trainer: '黒岩陽一', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 2, waku: 1, name: 'ラストドラフト', gender: '牡', age: 6, sire: 'ノヴェリスト', jockey: '三浦皇成', trainer: '戸田博文', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 10, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 3, waku: 2, name: 'ポタジェ', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: '吉田隼人', trainer: '友道康夫', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 4, waku: 2, name: 'アカイイト', gender: '牝', age: 5, sire: 'キズナ', jockey: '幸英明', trainer: '中竹和也', stable: '栗東', lastRaceResult: 9, secondLastRaceResult: 4, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 5, waku: 3, name: 'ディープボンド', gender: '牡', age: 5, sire: 'キズナ', jockey: '和田竜二', trainer: '大久保龍志', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 6, waku: 3, name: 'ウインマイティー', gender: '牝', age: 5, sire: 'ゴールドシップ', jockey: '松岡正海', trainer: '五十嵐忠男', stable: '美浦', lastRaceResult: 3, secondLastRaceResult: 6, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 7, waku: 4, name: 'ジェラルディーナ', gender: '牝', age: 4, sire: 'モーリス', jockey: 'C.デムーロ', trainer: '斎藤崇史', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 8, waku: 4, name: 'エフフォーリア', gender: '牡', age: 4, sire: 'エピファネイア', jockey: '横山武史', trainer: '鹿戸雄一', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 9, lastRaceName: '天皇賞秋', g1Wins: 3, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 9, waku: 5, name: 'イクイノックス', gender: '牡', age: 3, sire: 'キタサンブラック', jockey: 'C.ルメール', trainer: '木村哲也', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '天皇賞秋', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'ヴェラアズール', gender: '牡', age: 5, sire: 'エイシンフラッシュ', jockey: 'R.ムーア', trainer: '渡辺薫彦', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 11, waku: 6, name: 'ボッケリーニ', gender: '牡', age: 6, sire: 'キングカメハメハ', jockey: '浜中俊', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 12, waku: 6, name: 'イズジョーノキセキ', gender: '牝', age: 6, sire: 'エピファネイア', jockey: '岩田望来', trainer: '高橋康之', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 5, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 13, waku: 7, name: 'ボルドグフーシュ', gender: '牡', age: 3, sire: 'スクリーンヒーロー', jockey: '福永祐一', trainer: '宮本博', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 14, waku: 7, name: 'タイトルホルダー', gender: '牡', age: 4, sire: 'ドゥラメンテ', jockey: '横山和生', trainer: '栗田徹', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 3, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 15, waku: 8, name: 'ジャスティンパレス', gender: '牡', age: 3, sire: 'ディープインパクト', jockey: '鮫島克駿', trainer: '杉山晴紀', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 4, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 16, waku: 8, name: 'アリストテレス', gender: '牡', age: 5, sire: 'エピファネイア', jockey: '武豊', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 9, secondLastRaceResult: 5, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
  ],
};

// 2021年 有馬記念
export const arima2021: PastRaceResult = {
  year: 2021,
  actualResult: [1, 11, 6], // エフフォーリア, ディープボンド, クロノジェネシス
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'エフフォーリア', gender: '牡', age: 3, sire: 'エピファネイア', jockey: '横山武史', trainer: '鹿戸雄一', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 2, waku: 1, name: 'アカイイト', gender: '牝', age: 4, sire: 'キズナ', jockey: '幸英明', trainer: '中竹和也', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 5, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 3, waku: 2, name: 'アサマノイタズラ', gender: '牡', age: 3, sire: 'ヴィクトワールピサ', jockey: '田辺裕信', trainer: '手塚貴久', stable: '美浦', lastRaceResult: 7, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 4, waku: 2, name: 'ステラヴェローチェ', gender: '牡', age: 3, sire: 'バゴ', jockey: '吉田隼人', trainer: '須貝尚介', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 3, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 5, waku: 3, name: 'ペルシアンナイト', gender: '牡', age: 7, sire: 'ハービンジャー', jockey: '横山典弘', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 3, lastRaceName: 'マイルCS', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 6, waku: 3, name: 'クロノジェネシス', gender: '牝', age: 5, sire: 'バゴ', jockey: 'C.ルメール', trainer: '斎藤崇史', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: '凱旋門賞', g1Wins: 4, arimaExperience: true, jockeyChange: true, weight: 55 },
    { number: 7, waku: 4, name: 'モズベッロ', gender: '牡', age: 6, sire: 'ディープブリランテ', jockey: '池添謙一', trainer: '森田直行', stable: '栗東', lastRaceResult: 12, secondLastRaceResult: 3, lastRaceName: '宝塚記念', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 8, waku: 4, name: 'シャドウディーヴァ', gender: '牝', age: 5, sire: 'ハーツクライ', jockey: '福永祐一', trainer: '斎藤誠', stable: '美浦', lastRaceResult: 12, secondLastRaceResult: 10, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 9, waku: 5, name: 'タイトルホルダー', gender: '牡', age: 3, sire: 'ドゥラメンテ', jockey: '横山和生', trainer: '栗田徹', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'アリストテレス', gender: '牡', age: 4, sire: 'エピファネイア', jockey: '武豊', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 9, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 11, waku: 6, name: 'ディープボンド', gender: '牡', age: 4, sire: 'キズナ', jockey: '和田竜二', trainer: '大久保龍志', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 2, lastRaceName: '凱旋門賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 12, waku: 6, name: 'ユーキャンスマイル', gender: '牡', age: 7, sire: 'キングカメハメハ', jockey: '藤岡佑介', trainer: '友道康夫', stable: '栗東', lastRaceResult: 7, secondLastRaceResult: 11, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 13, waku: 7, name: 'ウインキートス', gender: '牝', age: 5, sire: 'ゴールドシップ', jockey: '丹内祐次', trainer: '宗像義忠', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 3, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 14, waku: 7, name: 'キセキ', gender: '牡', age: 7, sire: 'ルーラーシップ', jockey: '松山弘平', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 11, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 15, waku: 8, name: 'メロディーレーン', gender: '牝', age: 5, sire: 'オルフェーヴル', jockey: '岩田望来', trainer: '森田直行', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 7, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 16, waku: 8, name: 'サンレイポケット', gender: '牡', age: 6, sire: 'ジャングルポケット', jockey: '鮫島克駿', trainer: '高橋義忠', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
  ],
};

// 2020年 有馬記念
export const arima2020: PastRaceResult = {
  year: 2020,
  actualResult: [5, 14, 4], // クロノジェネシス, サラキア, フィエールマン
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'バビット', gender: '牡', age: 3, sire: 'ナカヤマフェスタ', jockey: '内田博幸', trainer: '浅野洋一郎', stable: '美浦', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'セントライト記念', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 2, waku: 1, name: 'オセアグレイト', gender: '牡', age: 5, sire: 'エピファネイア', jockey: '横山典弘', trainer: '菊沢隆徳', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 3, waku: 2, name: 'ラッキーライラック', gender: '牝', age: 5, sire: 'オルフェーヴル', jockey: 'C.ルメール', trainer: '松永幹夫', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'エリザベス女王杯', g1Wins: 3, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 4, waku: 2, name: 'フィエールマン', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: 'C.デムーロ', trainer: '手塚貴久', stable: '美浦', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 5, waku: 3, name: 'クロノジェネシス', gender: '牝', age: 4, sire: 'バゴ', jockey: '北村友一', trainer: '斎藤崇史', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '宝塚記念', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 6, waku: 3, name: 'ワールドプレミア', gender: '牡', age: 4, sire: 'ディープインパクト', jockey: '武豊', trainer: '友道康夫', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 7, waku: 4, name: 'ブラストワンピース', gender: '牡', age: 5, sire: 'ハービンジャー', jockey: '池添謙一', trainer: '大竹正博', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 13, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 8, waku: 4, name: 'モズベッロ', gender: '牡', age: 5, sire: 'ディープブリランテ', jockey: '松山弘平', trainer: '森田直行', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 4, lastRaceName: '宝塚記念', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 9, waku: 5, name: 'カレンブーケドール', gender: '牝', age: 4, sire: 'ディープインパクト', jockey: '戸崎圭太', trainer: '国枝栄', stable: '美浦', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'キセキ', gender: '牡', age: 6, sire: 'ルーラーシップ', jockey: '浜中俊', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 6, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 11, waku: 6, name: 'ペルシアンナイト', gender: '牡', age: 6, sire: 'ハービンジャー', jockey: '藤岡康太', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 8, secondLastRaceResult: 4, lastRaceName: 'マイルCS', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 12, waku: 6, name: 'アリストテレス', gender: '牡', age: 3, sire: 'エピファネイア', jockey: '福永祐一', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 13, waku: 7, name: 'オーソリティ', gender: '牡', age: 3, sire: 'オルフェーヴル', jockey: 'C.ルメール', trainer: '木村哲也', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 55 },
    { number: 14, waku: 7, name: 'サラキア', gender: '牝', age: 5, sire: 'ディープインパクト', jockey: '北村友一', trainer: '池添学', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 2, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 55 },
    { number: 15, waku: 8, name: 'ユーキャンスマイル', gender: '牡', age: 6, sire: 'キングカメハメハ', jockey: '藤岡佑介', trainer: '友道康夫', stable: '栗東', lastRaceResult: 11, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 16, waku: 8, name: 'クレッシェンドラヴ', gender: '牡', age: 6, sire: 'ステイゴールド', jockey: '田辺裕信', trainer: '林徹', stable: '美浦', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
  ],
};

// 2019年 有馬記念
export const arima2019: PastRaceResult = {
  year: 2019,
  actualResult: [6, 10, 7], // リスグラシュー, サートゥルナーリア, ワールドプレミア
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'スカーレットカラー', gender: '牝', age: 4, sire: 'ヴィクトワールピサ', jockey: '岩田康誠', trainer: '高野友和', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 2, waku: 1, name: 'スワーヴリチャード', gender: '牡', age: 5, sire: 'ハーツクライ', jockey: 'O.マーフィー', trainer: '庄野靖志', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 4, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 3, waku: 2, name: 'エタリオウ', gender: '牡', age: 4, sire: 'ステイゴールド', jockey: '横山典弘', trainer: '友道康夫', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 4, waku: 2, name: 'スティッフェリオ', gender: '牡', age: 5, sire: 'ステイゴールド', jockey: '松岡正海', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 4, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 5, waku: 3, name: 'フィエールマン', gender: '牡', age: 4, sire: 'ディープインパクト', jockey: '池添謙一', trainer: '手塚貴久', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 6, waku: 3, name: 'リスグラシュー', gender: '牝', age: 5, sire: 'ハーツクライ', jockey: 'D.レーン', trainer: '矢作芳人', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '宝塚記念', g1Wins: 3, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 7, waku: 4, name: 'ワールドプレミア', gender: '牡', age: 3, sire: 'ディープインパクト', jockey: '武豊', trainer: '友道康夫', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 8, waku: 4, name: 'レイデオロ', gender: '牡', age: 5, sire: 'キングカメハメハ', jockey: '三浦皇成', trainer: '藤沢和雄', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 9, waku: 5, name: 'アーモンドアイ', gender: '牝', age: 4, sire: 'ロードカナロア', jockey: 'C.ルメール', trainer: '国枝栄', stable: '美浦', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 5, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'サートゥルナーリア', gender: '牡', age: 3, sire: 'ロードカナロア', jockey: 'C.スミヨン', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 2, arimaExperience: false, jockeyChange: true, weight: 55 },
    { number: 11, waku: 6, name: 'キセキ', gender: '牡', age: 5, sire: 'ルーラーシップ', jockey: 'R.ムーア', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 5, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 12, waku: 6, name: 'クロコスミア', gender: '牝', age: 6, sire: 'ステイゴールド', jockey: '藤岡佑介', trainer: '西浦勝一', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 13, waku: 7, name: 'アルアイン', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: '北村友一', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 2, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 14, waku: 7, name: 'ヴェロックス', gender: '牡', age: 3, sire: 'ジャスタウェイ', jockey: '川田将雅', trainer: '中内田充正', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 3, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 15, waku: 8, name: 'アエロリット', gender: '牝', age: 5, sire: 'クロフネ', jockey: '戸崎圭太', trainer: '菊沢隆徳', stable: '美浦', lastRaceResult: 6, secondLastRaceResult: 4, lastRaceName: '天皇賞秋', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 16, waku: 8, name: 'シュヴァルグラン', gender: '牡', age: 7, sire: 'ハーツクライ', jockey: '福永祐一', trainer: '友道康夫', stable: '栗東', lastRaceResult: 7, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
  ],
};

// 2018年 有馬記念
export const arima2018: PastRaceResult = {
  year: 2018,
  actualResult: [8, 6, 13], // ブラストワンピース, レイデオロ, シュヴァルグラン
  trackCondition: '稍重', // 2018年は稍重
  horses: [
    { number: 1, waku: 1, name: 'サトノダイヤモンド', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: 'M.バルザローナ', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 5, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 2, waku: 1, name: 'キセキ', gender: '牡', age: 4, sire: 'ルーラーシップ', jockey: '川田将雅', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 8, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 3, waku: 2, name: 'ミッキースワロー', gender: '牡', age: 4, sire: 'トーセンホマレボシ', jockey: '横山典弘', trainer: '菊沢隆徳', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 4, waku: 2, name: 'サクラアンプルール', gender: '牡', age: 7, sire: 'キングカメハメハ', jockey: '田辺裕信', trainer: '金成貴史', stable: '美浦', lastRaceResult: 2, secondLastRaceResult: 4, lastRaceName: '天皇賞秋', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 5, waku: 3, name: 'モズカッチャン', gender: '牝', age: 4, sire: 'ハービンジャー', jockey: 'M.デムーロ', trainer: '鶴留明雄', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 7, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 6, waku: 3, name: 'レイデオロ', gender: '牡', age: 4, sire: 'キングカメハメハ', jockey: 'C.ルメール', trainer: '藤沢和雄', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 5, lastRaceName: '天皇賞秋', g1Wins: 2, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 7, waku: 4, name: 'オジュウチョウサン', gender: '牡', age: 7, sire: 'ステイゴールド', jockey: '武豊', trainer: '和田正一郎', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: '中山大障害', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 8, waku: 4, name: 'ブラストワンピース', gender: '牡', age: 3, sire: 'ハービンジャー', jockey: '池添謙一', trainer: '大竹正博', stable: '美浦', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 9, waku: 5, name: 'ミッキーロケット', gender: '牡', age: 5, sire: 'キングカメハメハ', jockey: 'O.マーフィー', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 7, lastRaceName: '宝塚記念', g1Wins: 1, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 10, waku: 5, name: 'マカヒキ', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: '岩田康誠', trainer: '友道康夫', stable: '栗東', lastRaceResult: 9, secondLastRaceResult: 7, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 11, waku: 6, name: 'パフォーマプロミス', gender: '牡', age: 6, sire: 'ステイゴールド', jockey: 'C.デムーロ', trainer: '藤原英昭', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 12, waku: 6, name: 'リッジマン', gender: '牡', age: 5, sire: 'スウェプトオーヴァーボード', jockey: '蛯名正義', trainer: '庄野靖志', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 3, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 13, waku: 7, name: 'シュヴァルグラン', gender: '牡', age: 6, sire: 'ハーツクライ', jockey: 'H.ボウマン', trainer: '友道康夫', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 14, waku: 7, name: 'スマートレイアー', gender: '牝', age: 8, sire: 'ディープインパクト', jockey: '戸崎圭太', trainer: '大久保龍志', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 11, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 15, waku: 8, name: 'クリンチャー', gender: '牡', age: 4, sire: 'ディープスカイ', jockey: '福永祐一', trainer: '宮本博', stable: '栗東', lastRaceResult: 11, secondLastRaceResult: 2, lastRaceName: '凱旋門賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 16, waku: 8, name: 'サウンズオブアース', gender: '牡', age: 7, sire: 'ネオユニヴァース', jockey: '藤岡佑介', trainer: '藤岡健一', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
  ],
};

// 2017年 有馬記念
export const arima2017: PastRaceResult = {
  year: 2017,
  actualResult: [2, 11, 9], // キタサンブラック, クイーンズリング, シュヴァルグラン
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'ヤマカツエース', gender: '牡', age: 5, sire: 'キングカメハメハ', jockey: '池添謙一', trainer: '池添兼雄', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 2, lastRaceName: '天皇賞秋', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 2, waku: 1, name: 'キタサンブラック', gender: '牡', age: 5, sire: 'ブラックタイド', jockey: '武豊', trainer: '清水久詞', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: '天皇賞秋', g1Wins: 6, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 3, waku: 2, name: 'トーセンビクトリー', gender: '牝', age: 5, sire: 'キングカメハメハ', jockey: 'R.ムーア', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 7, secondLastRaceResult: 8, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 55 },
    { number: 4, waku: 2, name: 'ミッキークイーン', gender: '牝', age: 5, sire: 'ディープインパクト', jockey: '浜中俊', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 2, lastRaceName: 'エリザベス女王杯', g1Wins: 2, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 5, waku: 3, name: 'ブレスジャーニー', gender: '牡', age: 3, sire: 'バトルプラン', jockey: '柴田大知', trainer: '古賀慎明', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 6, waku: 3, name: 'サトノクロニクル', gender: '牡', age: 3, sire: 'ハーツクライ', jockey: '石橋脩', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 2, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 7, waku: 4, name: 'シャケトラ', gender: '牡', age: 4, sire: 'マンハッタンカフェ', jockey: 'J.モレイラ', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 1, lastRaceName: '日経賞', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 8, waku: 4, name: 'サウンズオブアース', gender: '牡', age: 6, sire: 'ネオユニヴァース', jockey: '藤岡佑介', trainer: '藤岡健一', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 9, waku: 5, name: 'シュヴァルグラン', gender: '牡', age: 5, sire: 'ハーツクライ', jockey: 'H.ボウマン', trainer: '友道康夫', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 8, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 10, waku: 5, name: 'カレンミロティック', gender: '牡', age: 8, sire: 'ハーツクライ', jockey: '蛯名正義', trainer: '平田修', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 11, waku: 6, name: 'クイーンズリング', gender: '牝', age: 5, sire: 'マンハッタンカフェ', jockey: 'C.ルメール', trainer: '吉村圭司', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 12, waku: 6, name: 'ルージュバック', gender: '牝', age: 5, sire: 'マンハッタンカフェ', jockey: '戸崎圭太', trainer: '大竹正博', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 13, waku: 7, name: 'レインボーライン', gender: '牡', age: 4, sire: 'ステイゴールド', jockey: '岩田康誠', trainer: '浅見秀一', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 14, waku: 7, name: 'スワーヴリチャード', gender: '牡', age: 3, sire: 'ハーツクライ', jockey: 'M.デムーロ', trainer: '庄野靖志', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 15, waku: 8, name: 'サクラアンプルール', gender: '牡', age: 6, sire: 'キングカメハメハ', jockey: '田辺裕信', trainer: '金成貴史', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 3, lastRaceName: '札幌記念', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 16, waku: 8, name: 'サトノクラウン', gender: '牡', age: 5, sire: 'Marju', jockey: 'O.マーフィー', trainer: '堀宣行', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: true, jockeyChange: true, weight: 57 },
  ],
};

// 2016年 有馬記念
export const arima2016: PastRaceResult = {
  year: 2016,
  actualResult: [11, 1, 2], // サトノダイヤモンド, キタサンブラック, ゴールドアクター
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'キタサンブラック', gender: '牡', age: 4, sire: 'ブラックタイド', jockey: '武豊', trainer: '清水久詞', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 3, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 2, waku: 1, name: 'ゴールドアクター', gender: '牡', age: 5, sire: 'スクリーンヒーロー', jockey: '吉田隼人', trainer: '中川公成', stable: '美浦', lastRaceResult: 5, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 3, waku: 2, name: 'マリアライト', gender: '牝', age: 5, sire: 'ディープインパクト', jockey: '蛯名正義', trainer: '久保田貴士', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 4, lastRaceName: '宝塚記念', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 4, waku: 2, name: 'ヤマカツエース', gender: '牡', age: 4, sire: 'キングカメハメハ', jockey: '池添謙一', trainer: '池添兼雄', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 5, lastRaceName: '天皇賞秋', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 5, waku: 3, name: 'アドマイヤデウス', gender: '牡', age: 5, sire: 'アドマイヤドン', jockey: '岩田康誠', trainer: '橋田満', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 7, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 6, waku: 3, name: 'サウンズオブアース', gender: '牡', age: 5, sire: 'ネオユニヴァース', jockey: 'M.デムーロ', trainer: '藤岡健一', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 7, waku: 4, name: 'デニムアンドルビー', gender: '牝', age: 6, sire: 'ディープインパクト', jockey: '四位洋文', trainer: '角居勝彦', stable: '栗東', lastRaceResult: 8, secondLastRaceResult: 6, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 55 },
    { number: 8, waku: 4, name: 'ミッキークイーン', gender: '牝', age: 4, sire: 'ディープインパクト', jockey: '浜中俊', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 1, lastRaceName: 'エリザベス女王杯', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 9, waku: 5, name: 'ルージュバック', gender: '牝', age: 4, sire: 'マンハッタンカフェ', jockey: '戸崎圭太', trainer: '大竹正博', stable: '美浦', lastRaceResult: 4, secondLastRaceResult: 5, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 10, waku: 5, name: 'サトノノブレス', gender: '牡', age: 6, sire: 'ディープインパクト', jockey: '和田竜二', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 6, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 11, waku: 6, name: 'サトノダイヤモンド', gender: '牡', age: 3, sire: 'ディープインパクト', jockey: 'C.ルメール', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 12, waku: 6, name: 'シュヴァルグラン', gender: '牡', age: 4, sire: 'ハーツクライ', jockey: '福永祐一', trainer: '友道康夫', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 13, waku: 7, name: 'アルバート', gender: '牡', age: 5, sire: 'アドマイヤドン', jockey: '内田博幸', trainer: '堀宣行', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 14, waku: 7, name: 'シュヴァルグラン', gender: '牡', age: 4, sire: 'ハーツクライ', jockey: '福永祐一', trainer: '友道康夫', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 15, waku: 8, name: 'アルバート', gender: '牡', age: 5, sire: 'アドマイヤドン', jockey: '戸崎圭太', trainer: '堀宣行', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 16, waku: 8, name: 'ワンアンドオンリー', gender: '牡', age: 5, sire: 'ハーツクライ', jockey: '横山典弘', trainer: '橋口慎介', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 6, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: true, jockeyChange: false, weight: 57 },
  ],
};

// 2015年 有馬記念
export const arima2015: PastRaceResult = {
  year: 2015,
  actualResult: [7, 14, 5], // ゴールドアクター, サウンズオブアース, キタサンブラック
  trackCondition: '良',
  horses: [
    { number: 1, waku: 1, name: 'ラストインパクト', gender: '牡', age: 5, sire: 'ディープインパクト', jockey: '川田将雅', trainer: '松田博資', stable: '栗東', lastRaceResult: 6, secondLastRaceResult: 4, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 2, waku: 1, name: 'ショウナンパンドラ', gender: '牝', age: 4, sire: 'ディープインパクト', jockey: '池添謙一', trainer: '高野友和', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 3, waku: 2, name: 'ラブリーデイ', gender: '牡', age: 5, sire: 'キングカメハメハ', jockey: '浜中俊', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 4, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 2, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 4, waku: 2, name: 'リアファル', gender: '牡', age: 3, sire: 'ゼンノロブロイ', jockey: '三浦皇成', trainer: '音無秀孝', stable: '栗東', lastRaceResult: 2, secondLastRaceResult: 2, lastRaceName: '菊花賞', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 5, waku: 3, name: 'キタサンブラック', gender: '牡', age: 3, sire: 'ブラックタイド', jockey: '横山典弘', trainer: '清水久詞', stable: '栗東', lastRaceResult: 1, secondLastRaceResult: 14, lastRaceName: '菊花賞', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 6, waku: 3, name: 'トーセンレーヴ', gender: '牡', age: 7, sire: 'ディープインパクト', jockey: '柴田善臣', trainer: '池江泰寿', stable: '栗東', lastRaceResult: 5, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 7, waku: 4, name: 'ゴールドアクター', gender: '牡', age: 4, sire: 'スクリーンヒーロー', jockey: '吉田隼人', trainer: '中川公成', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'アルゼンチン共和国杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 8, waku: 4, name: 'ワンアンドオンリー', gender: '牡', age: 4, sire: 'ハーツクライ', jockey: '内田博幸', trainer: '橋口慎介', stable: '栗東', lastRaceResult: 7, secondLastRaceResult: 2, lastRaceName: 'ジャパンC', g1Wins: 1, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 9, waku: 5, name: 'アルバート', gender: '牡', age: 4, sire: 'アドマイヤドン', jockey: '蛯名正義', trainer: '堀宣行', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 5, lastRaceName: 'ステイヤーズS', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 10, waku: 5, name: 'マリアライト', gender: '牝', age: 4, sire: 'ディープインパクト', jockey: '戸崎圭太', trainer: '久保田貴士', stable: '美浦', lastRaceResult: 1, secondLastRaceResult: 1, lastRaceName: 'エリザベス女王杯', g1Wins: 1, arimaExperience: false, jockeyChange: false, weight: 55 },
    { number: 11, waku: 6, name: 'ルージュバック', gender: '牝', age: 3, sire: 'マンハッタンカフェ', jockey: '田辺裕信', trainer: '大竹正博', stable: '美浦', lastRaceResult: 7, secondLastRaceResult: 3, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 53 },
    { number: 12, waku: 6, name: 'アドマイヤデウス', gender: '牡', age: 4, sire: 'アドマイヤドン', jockey: 'J.モレイラ', trainer: '橋田満', stable: '栗東', lastRaceResult: 9, secondLastRaceResult: 3, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: true, weight: 57 },
    { number: 13, waku: 7, name: 'ゴールドシップ', gender: '牡', age: 6, sire: 'ステイゴールド', jockey: '岩田康誠', trainer: '須貝尚介', stable: '栗東', lastRaceResult: 8, secondLastRaceResult: 1, lastRaceName: 'ジャパンC', g1Wins: 6, arimaExperience: true, jockeyChange: true, weight: 57 },
    { number: 14, waku: 7, name: 'サウンズオブアース', gender: '牡', age: 4, sire: 'ネオユニヴァース', jockey: 'M.デムーロ', trainer: '藤岡健一', stable: '栗東', lastRaceResult: 3, secondLastRaceResult: 7, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 57 },
    { number: 15, waku: 8, name: 'カレンミロティック', gender: '牡', age: 6, sire: 'ハーツクライ', jockey: '武豊', trainer: '平田修', stable: '栗東', lastRaceResult: 10, secondLastRaceResult: 8, lastRaceName: 'ジャパンC', g1Wins: 0, arimaExperience: true, jockeyChange: false, weight: 57 },
    { number: 16, waku: 8, name: 'タッチングスピーチ', gender: '牝', age: 4, sire: 'ディープインパクト', jockey: 'C.ルメール', trainer: '堀宣行', stable: '美浦', lastRaceResult: 3, secondLastRaceResult: 4, lastRaceName: 'エリザベス女王杯', g1Wins: 0, arimaExperience: false, jockeyChange: false, weight: 55 },
  ],
};

// 全データをエクスポート
export const pastRaces: PastRaceResult[] = [
  arima2024,
  arima2023,
  arima2022,
  arima2021,
  arima2020,
  arima2019,
  arima2018,
  arima2017,
  arima2016,
  arima2015,
];

export default pastRaces;
