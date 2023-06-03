import { MenuItem } from "../menu/MenuItem";
import { AccountSvg } from "../svg/AccountSvg";
import { DashboardSvg } from "../svg/DashboardSvg";
import { IncomeSvg } from "../svg/IncomeSvg";
import { OutcomeSvg } from "../svg/OutcomeSvg";

const MENU_OPTIONS = [
  { menuName: 'Geral', svg: <DashboardSvg /> },
  { menuName: 'Entradas', svg: <IncomeSvg className="w-6 h-6" /> },
  { menuName: 'Saídas', svg: <OutcomeSvg /> }
];

export function SideMenu() {
  return (
    <aside id="default-sidebar" className="w-64 h-full text-blue transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="flex flex-col justify-between h-full py-4 overflow-y-auto">
        <ul className="space-y-4 font-medium">
          { MENU_OPTIONS.map(({ menuName, svg }, index) => <MenuItem key={index} menuName={menuName} svg={svg} />) }
        </ul>
        <ul className="space-y-4 font-medium mb-8">
          <MenuItem menuName="Conta" svg={<AccountSvg />} />
        </ul>
      </div>
    </aside>
  )
}