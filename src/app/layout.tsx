import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TunaDev Landing Page 👨‍💻',
  description: 'Landing Page made by TunaDev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
