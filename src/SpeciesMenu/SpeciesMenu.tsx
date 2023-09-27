import { useState, useEffect, ReactElement, Dispatch, SetStateAction } from 'react';

import Btn from '../Btn/Btn';
import Modal from '../Modal/Modal';

import species from '../assets/species-tree.json';

import classes from './SpeciesMenu.module.css';
import btnClasses from '../Btn/Btn.module.css';

interface Taxon {
    rank: string;
    name: string;
    children?: Taxon[];
    id: string;
}

interface SpeciesMenuProps {
    displayMenu: boolean;
    setDisplayMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setActiveSpecies: Dispatch<SetStateAction<string | null>>;
}


const SpeciesMenu = ({ displayMenu, setDisplayMenu, setActiveSpecies }: SpeciesMenuProps) => {
    const [speciesTree, setSpeciesTree] = useState< ReactElement | null>(null);

    const buildTree = (data: Taxon[]) => {
        return (
            <ul className={`${data[0].rank}-list ${classes['taxon-list']}`} >
                {
                    data.map((taxon: Taxon, index: number) => {
                        if (taxon.rank !== 'species' && (!taxon.children || !taxon.children.length)) {
                            return null;
                        }

                        const handleClick = () => {
                            setActiveSpecies(taxon.id);
                            setDisplayMenu(false);
                        }
                        
                        return (
                            <li key={index} className={taxon.rank}>
                                { 
                                    taxon.rank == 'species' && taxon ? <Btn handleClick={handleClick} classes={`${btnClasses['btn--link']}`}>{taxon.name}</Btn> : taxon.name
                                }
    
                                {
                                    taxon.children && taxon.children.length > 0 && buildTree(taxon.children)
                                }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    useEffect(() => {
        if (!speciesTree && displayMenu) {
            const tree = buildTree(species);
            
            setSpeciesTree(tree);
        }
    }, [ displayMenu ]);

    if (displayMenu && speciesTree) {
        return (
            <Modal id="speciesMenuModal" setOpen={setDisplayMenu} animationDirection='fade'> 
                <div className={classes['species-menu']}>
                    { speciesTree }
                </div>
            </Modal>
        );
    }    

    return false;
}


export default SpeciesMenu;