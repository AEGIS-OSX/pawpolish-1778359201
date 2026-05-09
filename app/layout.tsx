import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'pawpolish-1778359201',
  description: 'AEGIS-generated project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
