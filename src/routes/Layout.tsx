import { useState } from "react";
import { Outlet } from "react-router-dom";

import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

import Header from "@components/pageHeader/Header/Header";
import SpeciesMenu from "@components/pageHeader/SpeciesMenu/SpeciesMenu";

const Layout = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);

  return (
    <SpeciesMenuContext.Provider
      value={{
        displaySpeciesMenu,
        setDisplaySpeciesMenu,
      }}
    >
      <div className="m-auto max-w-[2400px]">
        <div className="mx-auto grid min-h-dvh w-[95%] grid-rows-max-1fr">
          <Header />
          <SpeciesMenu />
          <Outlet />
        </div>
        <footer className="fixed inset-x-0 bottom-0 pb-3 text-center text-primary-dark dark:text-primary-light">
          <small className="flex justify-center gap-[1ch]">
            <span>&copy; 2024</span>
            <a href="https://joemccarthy.dev/" target="_blank" className="link">
              Joe McCarthy
            </a>
          </small>
        </footer>
      </div>
    </SpeciesMenuContext.Provider>
  );
};

export default Layout;
