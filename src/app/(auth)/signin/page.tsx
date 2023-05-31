import { getProviders } from "next-auth/react"
import Head from "next/head";
import AuthProviders from "@/components/auth/AuthProviders";

export default async function SignIn() {
  const providers = await getProviders();
  const oAuthProviders = Object.values(providers ?? []);

  return (
    <>
      <Head><title>Login</title></Head>
      <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-cyan-300 to-sky-600">
        <div className="bg-white rounded-lg flex flex-col items-center justify-center lg:w-2/6 w-5/6 py-10 lg:py-6 gap-2 shadow-2xl">
          <h1 className="text-2xl font-bold text-purple-600 drop-shadow-md">ÁREA DE LOGIN</h1>
          <div className="px-7 flex flex-col gap-4 w-full">
            <AuthProviders oAuthProviders={oAuthProviders} />
          </div>
        </div>
      </main>
    </>
  )
}
