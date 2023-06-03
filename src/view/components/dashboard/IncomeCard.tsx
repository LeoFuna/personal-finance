type IncomeCardTypes = {
  cardTitle: string;
  incomeTypeName: string;
  value: string;
  svg: JSX.Element;
};

export function IncomeCard({ svg, cardTitle, incomeTypeName, value }: IncomeCardTypes) {
  return (
    <div className="flex flex-col bg-gray 2xl:w-5/12 w-5/12 h-full rounded-3xl">
      <div className="flex items-center w-3/4 h-2/6 ml-4 my-4 text-white">
        <div className="flex justify-center items-center bg-blue rounded-xl w-9 h-9 2xl:w-12 2xl:h-12">
          {svg}
        </div>
      </div>
      <div className="flex flex-col ml-4 h-4/6">
        <div className="h-3/6">
          <p className="text-sm text-blue font-bold">{cardTitle}</p>
          <p className="text-xxs text-blue opacity-50">{incomeTypeName}</p>
        </div>
        <p className="text-sm 2xl:text-base my-2 text-blue font-black">{value}</p>
      </div>
    </div>
  )
}