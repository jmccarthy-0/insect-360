import { useContext } from "react";
import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

const MainNav = () => {
  const { setDisplaySpeciesMenu } = useContext(SpeciesMenuContext);

  const handleClick = () => {
    setDisplaySpeciesMenu(true);
  };

  return (
    <nav>
      <ul className={"flex h-full items-center gap-x-4"}>
        <li>
          <button
            onClick={handleClick}
            className="link"
            aria-controls="speciesMenuModal"
          >
            Species
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
