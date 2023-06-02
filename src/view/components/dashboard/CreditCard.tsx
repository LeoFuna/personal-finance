import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export async function CreditCard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col w-6/12 h-full">
      <h1 className="text-blue font-bold mt-4">Geral</h1>
      <div className="flex flex-col justify-end py-4 px-4 space-y-2 bg-card bg-cover w-full h-4/6 my-auto rounded-2xl">
        <div>
          <p className="text-xs text-white">Cliente desde</p>
          <p className="text-xs text-white">01/04/2023</p>
        </div>
        <div>
          <p className="text-xs text-white">Nome</p>
          <p className="text-xs text-white">{session?.user?.name}</p>
        </div>
      </div>
    </div>
  )
}