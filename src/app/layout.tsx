import { Merriweather_Sans } from 'next/font/google';

import { Navbar } from '@/components/Navbar';

import './globals.css';

const merriweather_sans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['300', '700', '800'],
  variable: '--font-merriweather-sans',
});

export const metadata = {
  title: 'Momentsy',
  description:
    'Application inspired by time capsule to recall good moments in your life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={merriweather_sans.variable}>
      <body className="flex h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
