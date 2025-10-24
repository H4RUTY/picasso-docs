import React from 'react';
import type { ShoppingItem } from '@/lib/shopping-list';

type ShoppingTableProps = {
  items: ShoppingItem[];
};

function ItemsTable({
  title,
  items,
}: {
  title: string;
  items: ShoppingItem[];
}) {
  const sum = items.reduce((sum, item) => sum + item.price, 0);
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  return (
    <>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>部品</th>
            <th className="w-[20%]">リンク</th>
            <th>金額（円）</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <a href={item.url}>{item.shop} ↗️</a>
              </td>
              <td>{fmt(item.price)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>合計金額</td>
            <td className="font-bold">{fmt(sum)}</td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
}

export function ShoppingTable({ items }: ShoppingTableProps) {
  const studentItems = items.filter((item) => item.buyer === 'student');
  const teacherItems = items.filter((item) => item.buyer === 'teacher');
  const grandTotal = items.reduce((sum, item) => sum + item.price, 0);
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  return (
    <>
      <br />
      <ItemsTable title="自腹" items={studentItems} />
      <ItemsTable title="予算内" items={teacherItems} />
      <h3>合計金額</h3>
      <p className="font-bold text-lg">{fmt(grandTotal)}円</p>
      <br />
    </>
  );
}
