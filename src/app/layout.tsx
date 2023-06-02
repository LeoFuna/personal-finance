import Provider from '@/view/components/providers/Provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Finance',
  description: 'Finance mangement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Provider>
        <body className={inter.className}>
          {children}
        </body>
      </Provider>
    </html>
  )
}
