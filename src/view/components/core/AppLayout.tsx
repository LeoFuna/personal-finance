import React from 'react';
import Header from './Header';
import { SideMenu } from './SideMenu';

export default function AppLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex flex-col bg-gray h-4/5 w-4/5 rounded-3xl">
      <Header />
      <div className="flex h-full px-7">
        <SideMenu />
        {children}
      </div>
    </div>
  );
}
