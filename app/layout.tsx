import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/footer/index';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One page Gym',
  description: 'One page Gym',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300`}>
        <Header />
        <main>{children}</main>
         <Footer />
        </body>
    </html>
  )
}
