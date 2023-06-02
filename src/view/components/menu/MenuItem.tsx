'use client'
type MenuItemTypes = {
  menuName: string;
  svg: JSX.Element;
}

export function MenuItem({ menuName, svg }: MenuItemTypes) {
  return (
    <li className="mr-7 cursor-pointer">
      <a onClick={() => console.log(menuName)} className="flex items-center p-2 rounded-lg hover:bg-white">
        {svg}
        <span className="ml-3">{menuName}</span>
      </a>
    </li>
  )
}