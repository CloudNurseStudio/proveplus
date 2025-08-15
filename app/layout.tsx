import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prove+',
  description: 'Prove+ official site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


