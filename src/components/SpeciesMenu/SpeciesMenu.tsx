import { useState, useEffect, useContext, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { SpeciesMenuContext } from '../../contexts/SpeciesMenuContext';
import { fetchData } from '../../utils/ts/fetch-utils';
import Modal from '../Modal/Modal';
import classes from './SpeciesMenu.module.css';
import linkClasses from '../Link/Link.module.css';

type SpeciesItem = {
    sid: string,
    genus: string,
    species: string,
}

const SpeciesMenu = () => {
    const { displaySpeciesMenu, setDisplaySpeciesMenu} = useContext(SpeciesMenuContext)
    const [speciesTree, setSpeciesTree] = useState< ReactElement | null>(null);

    // Back end data for building list of species
    const buildTree = async () => {
        const data = await fetchData(`http://127.0.0.1:8000/species/`);

        return (
            <ul className={`${classes['species-list']}`} >
                {
                    data.map(({sid, genus, species}: SpeciesItem, index: number) => {
                        const handleClick = () => {
                            setDisplaySpeciesMenu(false);
                        }
                        
                        return (
                            <li key={index}>
                                <Link to={`${sid}/`} className={`${linkClasses['link']} ${linkClasses['link--italic']}`} onClick={handleClick}>{genus} {species}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    useEffect(() => {
        const buildList = async () => {
            if (!speciesTree && displaySpeciesMenu) {
                const tree = await buildTree();
                
                setSpeciesTree(tree);
            }
        }

        buildList();
    }, [ displaySpeciesMenu ]);

    if (displaySpeciesMenu && speciesTree) {
        return (
            <Modal id="speciesMenuModal" setOpen={setDisplaySpeciesMenu} animationDirection='fade'> 
                <div className={classes['species-menu']}>
                    <h2 className={classes['species-title']}>Species</h2>
                    { speciesTree }
                </div>
            </Modal>
        );
    }    

    return false;
}


export default SpeciesMenu;