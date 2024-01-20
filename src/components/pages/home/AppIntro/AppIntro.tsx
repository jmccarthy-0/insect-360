import { useEffect, useState, useContext } from "react";

import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

import Btn from "@components/global/Btn/Btn";

const AppIntro = () => {
  const [showBorder, setShowBorder] = useState(false);
  const { setDisplaySpeciesMenu } = useContext(SpeciesMenuContext);

  useEffect(() => {
    setTimeout(() => {
      //setBorderHeight('1');
      setShowBorder(true);
    }, 800);
  }, []);

  const handleClick = () => {
    setDisplaySpeciesMenu(true);
  };

  return (
    <div className="grid place-content-center gap-y-8 text-center">
      <div
        className={`relative after:absolute after:left-px after:top-0 after:h-full after:origin-top after:border-l after:border-muted-dark after:content-none dark:after:border-muted-light lg:px-8 lg:py-4 after:lg:content-[''] 2xl:px-16 2xl:py-6 ${showBorder ? "after:scale-y-1" : "after:scale-y-0"} after:transition-transform after:duration-300 after:ease-in`}
      >
        <h1 className="mb-6 text-5xl text-primary-dark dark:text-primary-light md:text-6xl lg:mb-8 lg:text-8xl">
          {import.meta.env.VITE_TITLE}
        </h1>
        <p className="mb-12 text-base text-primary-dark dark:text-primary-light md:mb-16 md:max-w-xl lg:max-w-full">
          Explore high resolution insect anatomy from every angle with LAB.
          Select a species to get started.
        </p>

        <div className="flex justify-center">
          <Btn handleClick={handleClick}>Species</Btn>
        </div>
      </div>
    </div>
  );
};

export default AppIntro;
