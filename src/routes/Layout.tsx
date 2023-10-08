import { useState, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import SpeciesMenu from '../components/SpeciesMenu/SpeciesMenu';

interface LayoutProps {
  children: ReactNode;
  displaySpeciesMenu: boolean;
  setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Layout = ({children, displaySpeciesMenu, setDisplaySpeciesMenu}: LayoutProps) => {
  return (
    <div className={'app'}>
      <div className="page-grid">
          <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} />
          <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} />

          {children}
      </div>
    </div>
  )
}

export default Layout;