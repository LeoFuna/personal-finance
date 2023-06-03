import { IncomeSvg } from "../svg/IncomeSvg";
import { IncomeCard } from "./IncomeCard";

export async function IncomeSection() {
  return (
    <div className="flex flex-col w-6/12 h-full">
      <h1 className="text-blue font-bold mt-4">
        Entradas à receber
      </h1>
      <div className="flex items-center h-4/6 justify-start space-x-5 w-full my-auto">
        <IncomeCard
          cardTitle="Freelancer"
          incomeTypeName="Recebimento variável"
          svg={<IncomeSvg className="w-6 h-6 2xl:w-8 2xl:h-8" />}
          value="R$ 200,00"
        />
        <IncomeCard
          cardTitle="Salário"
          incomeTypeName="Recebimento fixo"
          svg={<IncomeSvg className="w-6 h-6 2xl:w-8 2xl:h-8" />}
          value="R$ 25.300,00"
        />
      </div>
    </div>
  )
}