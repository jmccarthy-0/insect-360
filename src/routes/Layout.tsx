import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { SpeciesMenuContext } from '@contexts/SpeciesMenuContext';

import Header from '@components/pageHeader/Header/Header';
import SpeciesMenu from '@components/pageHeader/SpeciesMenu/SpeciesMenu';

const Layout = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);

  return (
    <SpeciesMenuContext.Provider value={{
      displaySpeciesMenu, 
      setDisplaySpeciesMenu
    }}>
      <div className='max-w-[2400px] m-auto'>
        <div className='grid w-[95%] min-h-dvh mx-auto grid-rows-max-1fr'>
            <Header />
            <SpeciesMenu />
            <Outlet />
        </div>
        <footer className='text-center fixed inset-x-0 bottom-0 pb-3 text-primary-dark dark:text-primary-light'>
          <small className='flex justify-center gap-[1ch]'><span>&copy; 2024</span><a href="https://joemccarthy.dev/" target="_blank" className='link'>Joe McCarthy</a></small>
        </footer>
      </div>
    </SpeciesMenuContext.Provider>
  )
}

export default Layout;