import { useContext } from "react";

// Components
import { Link } from "react-router-dom";
import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";
import Modal from "@components/global/Modal/Modal";

// Hooks
import { useSpeciesList } from "@hooks/useSpeciesList";

// Types
import { SpeciesListItem } from "@models/species.models";

const SpeciesMenu = () => {
  const { displaySpeciesMenu, setDisplaySpeciesMenu } = useContext(SpeciesMenuContext);
  const {speciesList} = useSpeciesList();

  // Back end data for building list of species
  const generateListMarkup = (data: SpeciesListItem[]) => {
    return (
      <ul className="grid gap-y-4">
        {data.map(({ sid, genus, species }: SpeciesListItem, index: number) => {
          const handleClick = () => {
            setDisplaySpeciesMenu(false);
          };

          return (
            <li key={index}>
              <Link
                to={`species/${sid}/`}
                className="link italic"
                onClick={handleClick}
              >
                {genus} {species}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  if (displaySpeciesMenu && speciesList) {
    return (
      <Modal
        id="speciesMenuModal"
        setOpen={setDisplaySpeciesMenu}
        animationDirection="fade"
      >
        <div className="grid h-dvh w-dvw place-content-center bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
          <h2 className="mb-4 text-4xl">Species</h2>
          {generateListMarkup(speciesList)}
        </div>
      </Modal>
    );
  }

  return false;
};

export default SpeciesMenu;
