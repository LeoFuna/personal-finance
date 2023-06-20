import Image from 'next/image';
import { Suspense } from 'react';
import HeaderUserDetails from './HeaderUserDetails';
import { Spinner } from './Spinner';

export default function Header() {
  return (
    <header className="flex justify-between px-7 py-4">
      <div className="w-2/4">
        <div className="w-4/12">
          <Image src="/logo.svg" width={50} height={50} alt="Logo" />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        {/* @ts-expect-error Async Server Components */}
        <HeaderUserDetails />
      </Suspense>
    </header>
  );
}
