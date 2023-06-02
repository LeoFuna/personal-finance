import AppLayout from "@/view/components/core/AppLayout"
import { redirect } from 'next/navigation';
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { GeneralDashboard } from "@/view/components/dashboard/GeneralDashboard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/signin');

  return (
    <main className="flex justify-center items-center h-screen">
      <AppLayout>
        <div className="flex items-start justify-center w-full">
          <GeneralDashboard />
        </div>
      </AppLayout>
    </main>
  )
}
