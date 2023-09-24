import { useState, useEffect, ReactElement, Dispatch, SetStateAction } from 'react';
import { fetchData } from '../utils/ts/fetch-utils';

import Btn from '../Btn/Btn';
import Modal from '../Modal/Modal';

import species from '../assets/species-tree.json';

import classes from './SpeciesMenu.module.css';
import btnClasses from '../Btn/Btn.module.css';

type SpeciesItem = {
    sid: string,
    binomialName: string
}

interface SpeciesMenuProps {
    displayMenu: boolean;
    setDisplayMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setActiveSpecies: Dispatch<SetStateAction<string | null>>;
}


const SpeciesMenu = ({ displayMenu, setDisplayMenu, setActiveSpecies }: SpeciesMenuProps) => {
    const [speciesTree, setSpeciesTree] = useState< ReactElement | null>(null);

    const buildTree = async () => {
        const data = await fetchData(`http://127.0.0.1:8000/species-list`);

        return (
            <ul className={`${classes['taxon-list']}`} >
                {
                    data.map(({sid, binomialName}: SpeciesItem, index: number) => {
                        const handleClick = () => {
                            setActiveSpecies(sid);
                            setDisplayMenu(false);
                        }
                        
                        return (
                            <li key={index}>
                                { 
                                    <Btn handleClick={handleClick} classes={`${btnClasses['btn--link']}`}>{binomialName}</Btn>
                                }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    useEffect(() => {
        const buildList = async () => {
            if (!speciesTree && displayMenu) {
                const tree = await buildTree();
                
                setSpeciesTree(tree);
            }
        }

        buildList();
    }, [ displayMenu ]);

    if (displayMenu && speciesTree) {
        return (
            <Modal setOpen={setDisplayMenu} animationDirection='fade'> 
                <div className={classes['species-menu']}>
                    { speciesTree }
                </div>
            </Modal>
        );
    }    

    return false;
}


export default SpeciesMenu;