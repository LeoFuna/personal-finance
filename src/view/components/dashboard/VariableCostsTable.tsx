'use client';
import PaginationButtons from '../core/PaginationButtons';

const MOCKED_COSTS = [
  { name: 'Energia', estimated: '170,00', actual: '120,00' },
  { name: 'Gasolina', estimated: '350,00', actual: '200,00' },
  { name: 'Salão', estimated: '150,00', actual: '170,00' },
];

export default function VariableCostsTable() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-blue font-bold">Custos Variáveis</h1>
      <table className="w-11/12 my-auto">
        <thead>
          <tr className="border-b border-b-blue text-blue">
            <td className="mx-auto text-center">Despesa</td>
            <td className="mx-auto text-center">Previsto</td>
            <td className="mx-auto text-center">Realizado</td>
          </tr>
        </thead>
        <tbody>
          {MOCKED_COSTS.map(({ actual, estimated, name }, index) => {
            const isBalanceNegative =
              parseFloat(estimated) - parseFloat(actual) > 0;
            const textColor = isBalanceNegative ? 'text-blue' : 'text-red';

            return (
              <tr key={index} className="border-b border-b-blue opacity-70">
                <td className="text-center text-blue opacity-70 text-sm">
                  {name}
                </td>
                <td className="text-center text-blue opacity-70 text-sm">
                  R$ {estimated}
                </td>
                <td
                  className={`text-center ${textColor} text-blue opacity-70 text-sm`}
                >
                  R$ {actual}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationButtons
        onNext={() => console.log('Vai pra prox paginaçao')}
        onPrev={() => console.log('volta a paginaçao')}
      />
    </div>
  );
}
