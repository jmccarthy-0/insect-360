import { useState, ReactNode } from 'react';
import Header from '../components/Header/Header';
import SpeciesMenu from '../components/SpeciesMenu/SpeciesMenu';

interface LayoutProps {
  children: ReactNode;
  displaySpeciesMenu: boolean;
  setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Layout = ({children, displaySpeciesMenu, setDisplaySpeciesMenu}: LayoutProps) => {
  const [activeSpecies, setActiveSpecies] = useState<string | null>(null);

  return (
    <div className={'app'}>
      <div className="page-grid">
          <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} />
          <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} setActiveSpecies={setActiveSpecies} />

          {children}
      </div>
    </div>
  )
}

export default Layout;