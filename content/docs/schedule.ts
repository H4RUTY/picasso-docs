export type ScheduleItem = {
  date: number;
  day: 'fri' | 'wed';
  content: string;
  todos: string;
  tags?: string[]; // 新規追加
};

export const scheduleList: ScheduleItem[] = [
  {
    date: 20250926,
    day: 'fri',
    content: 'ガイダンス・PBL1週目',
    todos: 'オリエンテーション・チーム分け・テーマ確認',
    tags: ['#task'],
  },
  {
    date: 20251003,
    day: 'fri',
    content: 'PBL2週目',
    todos: '仕様書案作成・技術調査',
    tags: ['#task'],
  },
  {
    date: 20251010,
    day: 'fri',
    content: 'PBL3週目',
    todos: 'ハード設計・UIモック作成',
    tags: ['#task'],
  },
  {
    date: 20251017,
    day: 'fri',
    content: '中間報告会1',
    todos: 'スライド発表・3Dプリント開始',
    tags: ['#milestone', '#task'],
  },
  {
    date: 20251024,
    day: 'fri',
    content: 'PBL4週目',
    todos: 'パーツ発注・3Dプリント・フロントUI実装開始',
    tags: ['#task'],
  },
  {
    date: 20251031,
    day: 'fri',
    content: 'PBL5週目',
    todos: 'バックエンドAPI実装開始・ハード接続確認',
    tags: ['#task'],
  },
  {
    date: 20251107,
    day: 'fri',
    content: '後期中間試験',
    todos: 'なし',
    tags: ['#holiday'],
  },
  {
    date: 20251114,
    day: 'fri',
    content: 'PBL6週目',
    todos: 'フロントとバックエンド統合・画像キャプチャテスト',
    tags: ['#task'],
  },
  {
    date: 20251121,
    day: 'fri',
    content: 'PBL7週目',
    todos: 'AI解析・ターン進行処理実装',
    tags: ['#task'],
  },
  {
    date: 20251128,
    day: 'fri',
    content: '月曜授業',
    todos: '授業対応・進捗確認',
    tags: ['#task'],
  },
  {
    date: 20251205,
    day: 'fri',
    content: '研修旅行',
    todos: 'なし',
    tags: ['#holiday'],
  },
  {
    date: 20251212,
    day: 'fri',
    content: '中間報告会2, PBL8週目',
    todos: '中間報告会スライド作成・ハード最終調整',
    tags: ['#milestone', '#task'],
  },
  {
    date: 20251219,
    day: 'fri',
    content: 'PBL9週目',
    todos: 'UI最終調整・描画機能テスト',
    tags: ['#task'],
  },
  {
    date: 20251226,
    day: 'fri',
    content: 'PBL10週目',
    todos: '総合テスト・バグ修正',
    tags: ['#task'],
  },
  {
    date: 20260102,
    day: 'fri',
    content: '冬季休業',
    todos: 'なし⛄️',
    tags: ['#holiday'],
  },
  {
    date: 20260107,
    day: 'wed',
    content: 'PBL11週目',
    todos: '展示準備・デモ動作確認',
    tags: ['#task'],
  },
  {
    date: 20260109,
    day: 'fri',
    content: '推薦選抜',
    todos: 'なし',
    tags: ['#holiday'],
  },
  {
    date: 20260116,
    day: 'fri',
    content: 'PBL12週目',
    todos: '最終調整・発表練習',
    tags: ['#task'],
  },
  {
    date: 20260123,
    day: 'fri',
    content: '後期期末試験',
    todos: 'なし',
    tags: ['#holiday'],
  },
  {
    date: 20260130,
    day: 'fri',
    content: '後期期末試験',
    todos: 'なし',
    tags: ['#holiday'],
  },
  {
    date: 20260206,
    day: 'fri',
    content: '発表',
    todos: '成果発表・最終レポート提出',
    tags: ['#milestone', '#task'],
  },
];

export default scheduleList;
