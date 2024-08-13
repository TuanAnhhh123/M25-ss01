// Ví dụ cho Next.js 13 với App Router
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rikkei Academy',
  description: 'Your page description',
  icons: {
    icon: 'https://learn.rikkeiacademy.com/favicon.ico.png',  
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
