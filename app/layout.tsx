import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Zen_Kaku_Gothic_New } from 'next/font/google';

const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ja" className={zen_kaku_gothic_new.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
