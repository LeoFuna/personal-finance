'use client'
import { ClientSafeProvider, signIn } from "next-auth/react"
import Image from "next/image"

type RenderProvidersProps = { oAuthProviders: ClientSafeProvider[] }

export default function AuthProviders({ oAuthProviders }: RenderProvidersProps) {
  return (
    <>
      {
        oAuthProviders.map((provider) => (
          <button
            key={provider.name}
            className=" flex justify-center p-2 rounded-md border bg-gradient-to-tr from-cyan-300 to-sky-600 text-blue font-bold text-lg"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            <Image className="mr-6" src={`/${provider.id}.png`} width={30} height={30} alt={`${provider.id} image`} />
            Entrar com {provider.name}
          </button>
        ))
      }
    </>
  )
}
