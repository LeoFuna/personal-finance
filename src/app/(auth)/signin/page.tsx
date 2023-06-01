import Head from "next/head";
import AuthProviders from "@/components/auth/AuthProviders";
import { Suspense } from "react";
import { Spinner } from "@/components/core/Spinner";

export default async function SignIn() {
  return (
    <>
      <Head><title>Login</title></Head>
      <main className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-cyan-300 to-sky-600">
        <div className="bg-white rounded-lg flex flex-col items-center justify-center lg:w-2/6 w-5/6 py-10 lg:py-6 gap-2 shadow-2xl">
          <h1 className="text-2xl font-bold text-purple-600 drop-shadow-md">ÁREA DE LOGIN</h1>
          <div className="px-7 flex flex-col items-center gap-4 w-full">
            <Suspense fallback={<Spinner />}>
              {/* @ts-expect-error Async Server Components */}
              <AuthProviders />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}
