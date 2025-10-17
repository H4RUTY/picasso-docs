export type ScheduleItem = {
  date: number;
  day: 'fri' | 'wed';
  content: string;
  todos: string;
  tags?: string[];
};

export const scheduleList: ScheduleItem[] = [
  {
    date: 20250926,
    day: 'fri',
    content: 'ガイダンス・PBL1週目',
    todos: 'オリエンテーション',
    tags: ['#task'],
  },
  {
    date: 20251003,
    day: 'fri',
    content: 'PBL2週目',
    todos: '役割分担・調査',
    tags: ['#task'],
  },
  {
    date: 20251010,
    day: 'fri',
    content: 'PBL3週目',
    todos: 'API設計完了・ペンプロッタ設計完了',
    tags: ['#task'],
  },
  {
    date: 20251017,
    day: 'fri',
    content: '中間報告会1',
    todos: 'プレゼン・3Dプリント準備・紙送り方式検討',
    tags: ['#milestone', '#task'],
  },
  {
    date: 20251024,
    day: 'fri',
    content: 'PBL4週目(パーツ発注)',
    todos: 'パーツ発注・3Dプリント・紙送り設計',
    tags: ['#task'],
  },
  {
    date: 20251031,
    day: 'fri',
    content: 'PBL5週目',
    todos: '3Dプリント・バックエンドAPI試運転・画像キャプチャテスト・UIモック',
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
    todos: 'ペンプロッタ組み立て・Arduino/GRBLファーム書き込み・動作確認',
    tags: ['#task'],
  },
  {
    date: 20251121,
    day: 'fri',
    content: 'PBL7週目(パーツ発注2)',
    todos: 'ペンプロッタ動作確認の続き・フロント/バックエンド統合',
    tags: ['#task'],
  },
  {
    date: 20251128,
    day: 'fri',
    content: '月曜授業（PBL休講）',
    todos: 'なし',
    tags: ['#holiday'],
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
    content: '中間報告会2・PBL8週目',
    todos: 'スライド発表・紙送り製作',
    tags: ['#milestone', '#task'],
  },
  {
    date: 20251219,
    day: 'fri',
    content: 'PBL9週目',
    todos: '紙送り製作・シリアル通信',
    tags: ['#task'],
  },
  {
    date: 20251226,
    day: 'fri',
    content: 'PBL10週目',
    todos: '統合テスト（UI→G-code→GRBL→動作）・デバッグ',
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
    content: 'PBL11週目（特別日程）',
    todos: 'デバッグ',
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
    todos: '最終調整',
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
    content: '最終発表会',
    todos: '発表',
    tags: ['#milestone'],
  },
];

export default scheduleList;
