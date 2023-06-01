import AppLayout from "@/components/core/AppLayout"
import { redirect } from 'next/navigation';
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/signin');

  return (
    <main className="flex justify-center items-center h-screen">
      <AppLayout>
        <div className="flex items-start justify-center w-full">
          <div style={{ height: '95%' }} className="bg-white w-full rounded-3xl">

          </div>
        </div>
      </AppLayout>
    </main>
  )
}
