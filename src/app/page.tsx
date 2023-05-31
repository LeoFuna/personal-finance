'use client'
import AppLayout from "@/components/core/AppLayout"
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin')
    },
  })
  return (
    <main className="flex justify-center items-center h-screen bg-white">
      <AppLayout>
        <div>
          Sou o filho
        </div>
      </AppLayout>
    </main>
  )
}
