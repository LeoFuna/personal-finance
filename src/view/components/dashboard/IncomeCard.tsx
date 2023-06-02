type IncomeCardTypes = {
  cardTitle: string;
  incomeTypeName: string;
  value: string;
  svg: JSX.Element;
};

export function IncomeCard({ svg, cardTitle, incomeTypeName, value }: IncomeCardTypes) {
  return (
    <div className="flex flex-col bg-gray w-2/4 h-full rounded-3xl">
      <div className="flex items-center w-3/4 h-2/6 ml-4 my-1 text-white">
        <div className="flex justify-center items-center bg-blue rounded-lg w-10 h-10">
          {svg}
        </div>
      </div>
      <div className="flex flex-col ml-4 h-4/6">
        <div className="h-3/6">
          <p className="text-sm text-blue font-bold">{cardTitle}</p>
          <p className="text-xxm text-blue opacity-50">{incomeTypeName}</p>
        </div>
        <p className="text-sm my-2 text-blue font-bold">{value}</p>
      </div>
    </div>
  )
}