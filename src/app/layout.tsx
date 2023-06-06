import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { NextAuthProvider } from './provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
     title: 'Dashboard UI | Listed-inc company assignment',
     description: 'Created by Atanu Karmakar',
}

export default function RootLayout({
     children,
}: {
     children: React.ReactNode
}) {
     return (
          <html lang="en">
               <body className={inter.className}>
                    <NextAuthProvider >
                         {children}
                    </NextAuthProvider>
               </body>
          </html>
     )
}
