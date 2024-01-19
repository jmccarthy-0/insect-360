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
      <div className='max-w-[2400px] m-auto'>
        <div className='page-grid'>
            <Header />
            <SpeciesMenu />
            <Outlet />
        </div>
        <footer className='text-center fixed inset-x-0 bottom-0 pb-3 text-primary-dark dark:text-primary-light'>
          <small className='flex justify-center gap-[1ch]'><span>&copy; 2024</span><a href="https://joemccarthy.dev/" target="_blank" className={LinkStyles['link']}>Joe McCarthy</a></small>
        </footer>
      </div>
    </SpeciesMenuContext.Provider>
  )
}

export default Layout;