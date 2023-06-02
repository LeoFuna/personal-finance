import { IncomeSvg } from "../svg/IncomeSvg";
import { IncomeCard } from "./IncomeCard";

export async function IncomeSection() {
  return (
    <div className="flex flex-col w-6/12 h-full">
      <h1 className="text-blue font-bold mt-4">
        Entradas à receber
      </h1>
      <div className="flex items-center justify-center space-x-3 py-4 w-full h-full my-auto">
        <IncomeCard
          cardTitle="Freelancer"
          incomeTypeName="Recebimento variável"
          svg={<IncomeSvg />}
          value="R$ 200,00"
        />
        <IncomeCard
          cardTitle="Salário"
          incomeTypeName="Recebimento fixo"
          svg={<IncomeSvg />}
          value="R$ 25.300,00"
        />
      </div>
    </div>
  )
}