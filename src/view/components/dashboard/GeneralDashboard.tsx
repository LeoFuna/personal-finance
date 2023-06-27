import { CreditCard } from './CreditCard';
import { IncomeSection } from './IncomeSection';
import Transactions from './Transactions';

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
          <h1>Saldo do Mes</h1>
          <p>R$ 250,00</p>
          <h1>Saldo Custos Variáveis</h1>
          <p>R$ - 50,00</p>
          <h1>Custos Variáveis</h1>
          {/* Esse caso aqui provavelmente teremos que pensa rnuma paginaçao para trazer os dados */}
          {/* Caso haja muitos custos variáveis */}
          <div className="flex">
            <p>Previsto: X</p>
            <p>Realizado: Y</p>
          </div>
        </div>
      </div>
    </div>
  );
}
