import { IncomeSvg } from '../svg/IncomeSvg';

const MOCKED_TRANSACTIONS = [
  {
    logo: 'logo',
    description: 'Compra de camiseta',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
  {
    logo: 'logo',
    description: 'Venda de iphone',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
  {
    logo: 'logo',
    description: 'Pagamento energia elétrica',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
  {
    logo: 'logo',
    description: 'Pagamento energia elétrica',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
  {
    logo: 'logo',
    description: 'Pagamento energia elétrica',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
  {
    logo: 'logo',
    description: 'Pagamento energia elétrica',
    date: '27/06/2023',
    price: 'R$ 50,00',
  },
];

export default function Transactions() {
  return (
    <ul>
      {MOCKED_TRANSACTIONS.map(({ logo, date, description, price }, index) => (
        <li key={index}>
          <div className="flex py-3">
            {/* Aqui vai ser algum get logo pelo logo que vier */}
            <IncomeSvg className="text-blue w-6" />
            <div className="flex justify-around w-full pl-5">
              <p className="text-blue w-6/12 font-semibold text-sm">
                {description}
              </p>
              <p className="text-blue opacity-50 w-3/12 font-semibold text-sm">
                {date}
              </p>
              <p className="text-blue w-3/12 font-semibold text-sm">{price}</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray rounded-md" />
        </li>
      ))}
    </ul>
  );
}
