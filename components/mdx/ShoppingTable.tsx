import React from 'react';

type ShoppingItem = {
  name: string;
  url: string;
  shop: string;
  price: number;
};

type ShoppingTableProps = {
  items: ShoppingItem[];
};

export function ShoppingTable({ items }: ShoppingTableProps) {
  const sum = items.reduce((sum, item) => sum + item.price, 0);
  const fmt = (n: number) => n.toLocaleString('ja-JP');

  return (
    <>
      <br />
      <table>
        <thead>
          <tr>
            <th>部品</th>
            <th className="w-[20%]">リンク</th>
            <th>金額（円）</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                <a href={item.url}>
                  {item.shop} ↗️
                </a>
              </td>
              <td>{fmt(item.price)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>合計金額</td>
            <td className="font-bold">
              {fmt(sum)}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
}
