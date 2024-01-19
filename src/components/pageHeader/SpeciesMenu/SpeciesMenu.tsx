import { useState, useEffect, useContext, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { SpeciesMenuContext } from '@contexts/SpeciesMenuContext';
import { fetchData } from '@utils/ts/fetch-utils';
import Modal from '@components/global/Modal/Modal';
import classes from './SpeciesMenu.module.css';

type SpeciesItem = {
    sid: string,
    genus: string,
    species: string,
}

const SpeciesMenu = () => {
    const { displaySpeciesMenu, setDisplaySpeciesMenu} = useContext(SpeciesMenuContext)
    const [speciesList, setSpeciesList] = useState< ReactElement | null>(null);

    // Back end data for building list of species
    const generateListMarkup = (data: SpeciesItem[]) => {
        return (
            <ul className={`${classes['species-list']}`} >
                {
                    data.map(({sid, genus, species}: SpeciesItem, index: number) => {
                        const handleClick = () => {
                            setDisplaySpeciesMenu(false);
                        }
                        
                        return (
                            <li key={index}>
                                <Link to={`species/${sid}/`} className='link italic' onClick={handleClick}>{genus} {species}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

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
        }

        buildList();
    }, [ displaySpeciesMenu ]);

    if (displaySpeciesMenu && speciesList) {
        return (
            <Modal id="speciesMenuModal" setOpen={setDisplaySpeciesMenu} animationDirection='fade'> 
                <div className={classes['species-menu']}>
                    <h2 className={classes['species-title']}>Species</h2>
                    { speciesList }
                </div>
            </Modal>
        );
    }    

    return false;
}


export default SpeciesMenu;