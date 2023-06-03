import { CreditCard } from "./CreditCard"
import { IncomeSection } from "./IncomeSection"

export function GeneralDashboard() {
  return (
    <div style={{ height: '95%' }} className="flex items-center justify-center bg-white w-full rounded-3xl space-x-5">
      <div className="flex flex-col items-center w-8/12 h-full">
        <div className="flex justify-center bg-white w-full h-2.5/6 space-x-4 rounded-3xl">
          {/* @ts-expect-error Async Server Components */}
          <CreditCard />
          {/* @ts-expect-error Async Server Components */}
          <IncomeSection />
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