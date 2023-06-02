import Provider from '@/view/components/providers/Provider'
import './globals.css'
import { Red_Hat_Display } from 'next/font/google'

const mainFont = Red_Hat_Display({ subsets: ['latin'], variable: '--font-main' });

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
        <body className={`${mainFont.variable} font-main`}>
          {children}
        </body>
      </Provider>
    </html>
  )
}
