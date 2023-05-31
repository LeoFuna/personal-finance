import React from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";

export default function AppLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="bg-gray h-4/5 w-4/5">
      <Header />
      <div className="flex">
        <SideMenu />
        {children}
      </div>
    </div>
  )
}