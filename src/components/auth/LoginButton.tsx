'use client'
import { ClientSafeProvider, signIn } from "next-auth/react";
import Image from "next/image";

export function LoginButton({ provider }: { provider: ClientSafeProvider }) {
  return (
    <button
      className="flex justify-center p-2 w-full rounded-md border bg-gradient-to-tr from-cyan-300 to-sky-600 text-blue font-bold text-lg"
      onClick={() => signIn(provider.id, { callbackUrl: '/' })}
    >
      <Image className="mr-6" src={`/${provider.id}.png`} width={30} height={30} alt={`${provider.id} image`} />
      Entrar com {provider.name}
    </button>
  )
}