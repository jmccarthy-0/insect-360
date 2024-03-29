import { useState, useEffect, useContext, ReactElement } from "react";
import { Link } from "react-router-dom";
import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";
import { fetchData } from "@utils/ts/fetch-utils";
import Modal from "@components/global/Modal/Modal";

type SpeciesItem = {
  sid: string;
  genus: string;
  species: string;
};

const SpeciesMenu = () => {
  const { displaySpeciesMenu, setDisplaySpeciesMenu } =
    useContext(SpeciesMenuContext);
  const [speciesList, setSpeciesList] = useState<ReactElement | null>(null);

  // Back end data for building list of species
  const generateListMarkup = (data: SpeciesItem[]) => {
    return (
      <ul className="grid gap-y-4">
        {data.map(({ sid, genus, species }: SpeciesItem, index: number) => {
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

  useEffect(() => {
    const buildList = async () => {
      if (!speciesList && displaySpeciesMenu) {
        const data = await fetchData(`${import.meta.env.VITE_API}/species/`);

        if (data) {
          const markup = generateListMarkup(data);
          setSpeciesList(markup);

          return;
        }

        setSpeciesList(<p>Error: Could not retrieve the species list</p>);
      }
    };

    buildList();
  }, [displaySpeciesMenu]);

  if (displaySpeciesMenu && speciesList) {
    return (
      <Modal
        id="speciesMenuModal"
        setOpen={setDisplaySpeciesMenu}
        animationDirection="fade"
      >
        <div className="grid h-dvh w-dvw place-content-center bg-primary-light text-primary-dark dark:bg-primary-dark dark:text-primary-light">
          <h2 className="mb-4 text-4xl">Species</h2>
          {speciesList}
        </div>
      </Modal>
    );
  }

  return false;
};

export default SpeciesMenu;
