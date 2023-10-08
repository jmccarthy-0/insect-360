import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SpeciesMenu from '../components/SpeciesMenu/SpeciesMenu';

const Layout = () => {
    const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
    const [activeSpecies, setActiveSpecies] = useState<string | null>(null);

    return (
        <div className={'app'}>
        <div className="page-grid">
          {/* <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} />
          <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} setActiveSpecies={setActiveSpecies} /> */}
          <header>Header</header>
          
          <Outlet />
        </div>
      </div>
    )
}

export default Layout;