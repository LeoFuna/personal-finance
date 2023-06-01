import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Image from "next/image";

export default async function HeaderUserDetails() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex w-full justify-end items-center space-x-4">
      <h3 className="text-blue font-bold">Olá, {session?.user?.name?.split(' ')[0]} </h3>
      <div className="flex justify-center">
        <Image className="rounded-full" src={session?.user?.image || ''} width={50} height={50} alt="Avatar" />
      </div>
    </div>
  )
}