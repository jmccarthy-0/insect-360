import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SpeciesMenuContext } from '../contexts/SpeciesMenuContext';

import Header from '../components/Header/Header';
import SpeciesMenu from '../components/SpeciesMenu/SpeciesMenu';

import classes from './Layout.module.css';

const Layout = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);

  return (
    <SpeciesMenuContext.Provider value={{
      displaySpeciesMenu, 
      setDisplaySpeciesMenu
    }}>
      <div className={classes['app']}>
        <div className={classes['page-grid']}>
            <Header />
            <SpeciesMenu />

            <Outlet />
        </div>
      </div>
    </SpeciesMenuContext.Provider>
  )
}

export default Layout;