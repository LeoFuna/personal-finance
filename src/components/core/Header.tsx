import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const session = useSession();
  
  if (session.status !== 'authenticated') return (<></>);

  return(
    <header className="flex justify-between px-7 py-4">
      <div className="w-2/4">
        <div className="w-4/12">
          <Image src='/logo.svg' width={50} height={50} alt="Logo" />
        </div>
      </div>
      <div className="flex w-2/4 justify-end items-center">
        <h3 className="text-blue font-bold">Olá, {session.data.user?.name?.split(' ')[0]} </h3>
        <div className="flex justify-center w-2/12">
          <Image className="rounded-full" src={session.data.user?.image || ''} width={50} height={50} alt="Avatar" />
        </div>
      </div>
    </header>
  )
}