export type ScheduleItem = {
  date: string;
  day: "fri" | "wed";
  content: string;
  todos: string;
};

export const scheduleList: ScheduleItem[] = [
  {
    date: '0926',
    day: "fri",
    content: "ガイダンス・PBL1週目",
    todos: "終了"
  },
  {
    date: '1003',
    day: "fri",
    content: "PBL2週目",
    todos: "終了"
  },
  {
    date: '1010',
    day: "fri",
    content: "PBL3週目",
    todos: "終了"
  },
  {
    date: '1017',
    day: "fri",
    content: "中間報告会1",
    todos: "スライド発表・3Dプリント開始"
  },
  {
    date: '1024',
    day: "fri",
    content: "PBL4週目",
    todos: "発注・3Dプリント"
  },
  {
    date: '1031',
    day: "fri",
    content: "PBL5週目",
    todos: "stub"
  },
  {
    date: '1107',
    day: "fri",
    content: "後期中間試験",
    todos: "なし"
  },
  {
    date: '1114',
    day: "fri",
    content: "PBL6週目",
    todos: "stub"
  },
  {
    date: '1121',
    day: "fri",
    content: "PBL7週目",
    todos: "stub"
  },
  {
    date: '1128',
    day: "fri",
    content: "月曜授業",
    todos: "なし"
  },
  {
    date: '1205',
    day: "fri",
    content: "研修旅行",
    todos: "なし"
  },
  {
    date: '1212',
    day: "fri",
    content: "中間報告会2, PBL8週目",
    todos: "stub"
  },
  {
    date: '1219',
    day: "fri",
    content: "PBL9週目",
    todos: "stub"
  },
  {
    date: '1226',
    day: "fri",
    content: "PBL10週目",
    todos: "stub"
  },
  {
    date: '0102',
    day: "fri",
    content: "冬季休業",
    todos: "なし⛄️"
  },
  {
    date: '0107',
    day: "wed",
    content: "PBL11週目",
    todos: "stub"
  },
  {
    date: '0109',
    day: "fri",
    content: "推薦選抜",
    todos: "なし"
  },
  {
    date: '0116',
    day: "fri",
    content: "PBL12週目",
    todos: "stub"
  },
  {
    date: '0123',
    day: "fri",
    content: "後期期末試験",
    todos: "なし"
  },
  {
    date: '0130',
    day: "fri",
    content: "後期期末試験",
    todos: "なし"
  },
  {
    date: '0206',
    day: "fri",
    content: "発表",
    todos: "がんばる"
  },
];

export default scheduleList;
