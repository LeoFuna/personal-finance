import { CreditCard } from "./CreditCard"

export function GeneralDashboard() {
  return (
    <div style={{ height: '95%' }} className="flex items-center justify-center bg-white w-full rounded-3xl space-x-5">
      <div className="flex flex-col items-center w-8/12 h-full">
        <div className="flex justify-center bg-white w-11/12 h-3/6 rounded-3xl space-x-5">
          {/* @ts-expect-error Async Server Components */}
          <CreditCard />
          <div className="bg-blue w-5/12 h-full">

          </div>
        </div>
        <div className="bg-white w-11/12 h-3/6 rounded-3xl">
          Transaçoes
        </div>
      </div>
      <div className="bg-blue w-3/12 h-full">

      </div>
    </div>
  )
}