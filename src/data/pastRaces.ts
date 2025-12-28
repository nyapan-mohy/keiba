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
}

// 2024年 有馬記念
export const arima2024: PastRaceResult = {
  year: 2024,
  actualResult: [8, 16, 1], // レガレイラ, シャフリヤール, ダノンデサイル
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

// 全データをエクスポート
export const pastRaces: PastRaceResult[] = [
  arima2024,
  arima2023,
  arima2022,
  arima2021,
  arima2020,
];

export default pastRaces;
