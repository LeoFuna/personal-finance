'use client'

import { SessionProvider } from "next-auth/react"
import { ReactElement } from "react"

export default function Provider({ children }: { children: ReactElement }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}