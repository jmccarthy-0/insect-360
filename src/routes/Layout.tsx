import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SpeciesMenuContext } from '@contexts/SpeciesMenuContext';

import Header from '@components/pageHeader/Header/Header';
import SpeciesMenu from '@components/pageHeader/SpeciesMenu/SpeciesMenu';

import PageStyles from './Layout.module.css';
import LinkStyles from '@components/global/Link/Link.module.css';

const Layout = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);

  return (
    <SpeciesMenuContext.Provider value={{
      displaySpeciesMenu, 
      setDisplaySpeciesMenu
    }}>
      <div className={PageStyles['app']}>
        <div className={PageStyles['page-grid']}>
            <Header />
            <SpeciesMenu />
            <Outlet />
        </div>
        <footer className={PageStyles['footer']}>
          <small><span>&copy; 2024</span><a href="https://joemccarthy.dev/" target="_blank" className={LinkStyles['link']}>Joe McCarthy</a></small>
        </footer>
      </div>
    </SpeciesMenuContext.Provider>
  )
}

export default Layout;