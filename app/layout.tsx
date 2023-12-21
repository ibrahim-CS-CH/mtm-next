import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Provider from './Provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MTM',
  description: 'electronics shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Provider >
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
