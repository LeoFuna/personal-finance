import { CreditCard } from './CreditCard';
import { IncomeSection } from './IncomeSection';
import Transactions from './Transactions';
import VariableCostsTable from './VariableCostsTable';

export function GeneralDashboard() {
  return (
    <div
      style={{ height: '95%' }}
      className="flex items-center justify-center bg-white w-full rounded-3xl space-x-5"
    >
      <div className="flex flex-col items-center w-8/12 h-full">
        <div className="flex justify-center bg-white w-full h-2.5/6 space-x-4 rounded-3xl">
          {/* @ts-expect-error Async Server Components */}
          <CreditCard />
          {/* @ts-expect-error Async Server Components */}
          <IncomeSection />
        </div>
        <div className="bg-white w-11/12 h-3/6 rounded-3xl">
          <h1 className="section-title">Transações Recentes</h1>
          <Transactions />
        </div>
      </div>
      <div className="w-3/12 h-full flex justify-center items-center">
        <div className="bg-gray w-full h-5/6 rounded-2xl">
          <section className="ml-auto flex flex-col">
            <div className="m-4">
              <h1 className="text-blue opacity-50 font-semibold text-sm">
                Saldo do Mes
              </h1>
              <p className="text-xl text-blue font-bold">R$ 250,00</p>
            </div>
            <div className="m-4">
              <h1 className="text-blue opacity-50 font-semibold text-sm">
                Saldo Custos Variáveis
              </h1>
              <p className="text-xl text-blue font-bold">R$ - 50,00</p>
            </div>
          </section>
          <VariableCostsTable />
        </div>
      </div>
    </div>
  );
}
