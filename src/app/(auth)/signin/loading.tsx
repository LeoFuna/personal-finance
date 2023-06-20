import { Spinner } from '@/view/components/core/Spinner';

export default function SignInLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}
