import { Flag, Tag as TagIcon, Wrench, TreePalm } from 'lucide-react';

type ScheduleItem = {
  date: number;
  day: string;
  content: string;
  todos: string;
  tags?: string[];
};

type ScheduleTableProps = {
  items: ScheduleItem[];
};

export function ScheduleTable({ items }: ScheduleTableProps) {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth() + 1;
  const d = today.getDate();
  const todayKey = Number(
    `${y}${String(m).padStart(2, '0')}${String(d).padStart(2, '0')}`,
  );
  const formatMD = (yyyymmdd: number) => {
    const s = String(yyyymmdd);
    const m = Number(s.slice(4, 6));
    const d = Number(s.slice(6, 8));
    return `${m}/${d}`;
  };

  const renderTag = (tag: string) => {
    if (tag === '#milestone') {
      return (
        <span className="inline-flex items-center rounded-full px-1 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
          <Flag size={14} />
        </span>
      );
    }
    if (tag === '#task') {
      return (
        <span className="inline-flex items-center rounded-full px-1 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
          <Wrench size={14} />
        </span>
      );
    }
    if (tag === '#holiday') {
      return (
        <span className="inline-flex items-center rounded-full px-1 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
          <TreePalm size={14} />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full px-1 py-1 bg-neutral-100 text-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200">
        <TagIcon size={14} /> {tag}
      </span>
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>内容</th>
            <th>ToDos</th>
            <th>Tag</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            const itemKey = item.date; // YYYYMMDD number
            const isPast = itemKey < todayKey;
            const dayLabel =
              item.day === 'fri' ? '金' : item.day === 'wed' ? '水' : item.day;

            return (
              <tr key={itemKey}>
                <td
                  className={
                    isPast
                      ? 'text-neutral-400 dark:text-neutral-600'
                      : 'text-neutral-900 dark:text-neutral-100'
                  }
                >
                  {formatMD(itemKey)} ({dayLabel})
                </td>
                <td
                  className={
                    isPast
                      ? 'text-neutral-400 dark:text-neutral-600'
                      : 'text-neutral-900 dark:text-neutral-100'
                  }
                >
                  {item.content}
                </td>
                <td
                  className={
                    isPast
                      ? 'text-neutral-400 dark:text-neutral-600'
                      : 'text-neutral-700 dark:text-neutral-300'
                  }
                >
                  {item.todos}
                </td>
                <td>
                  <div>
                    {(item.tags || ['#task']).map(t => (
                      <span key={t}>{renderTag(t)}</span>
                    ))}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
