import { useState, useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import Btn from '../Btn/Btn';
import Modal from '../Modal/Modal';

import { setQueryParam } from '../../utils/ts/query-utils';

import species from '../../assets/species-tree.json';

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
}


const SpeciesMenu = ({ displayMenu, setDisplayMenu }: SpeciesMenuProps) => {
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
                            setDisplayMenu(false);
                        }
                        
                        return (
                            <li key={index} className={taxon.rank}>
                                { 
                                    taxon.rank == 'species' && taxon ? <Link to={`${taxon.id}/`} className={`${btnClasses['btn--link']}`} onClick={handleClick}>{taxon.name}</Link> : taxon.name
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