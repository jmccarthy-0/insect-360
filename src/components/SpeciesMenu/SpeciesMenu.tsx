import { useState, useEffect, useContext, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { SpeciesMenuContext } from '../../contexts/SpeciesMenuContext';
import Modal from '../Modal/Modal';
import species from '../../assets/species-tree.json';
import classes from './SpeciesMenu.module.css';
import btnClasses from '../Btn/Btn.module.css';

interface Taxon {
    rank: string;
    name: string;
    children?: Taxon[];
    id: string;
}

const SpeciesMenu = () => {
    const { displaySpeciesMenu, setDisplaySpeciesMenu} = useContext(SpeciesMenuContext)
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
                            setDisplaySpeciesMenu(false);
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
        if (!speciesTree && displaySpeciesMenu) {
            const tree = buildTree(species);
            
            setSpeciesTree(tree);
        }
    }, [ displaySpeciesMenu ]);

    if (displaySpeciesMenu && speciesTree) {
        return (
            <Modal id="speciesMenuModal" setOpen={setDisplaySpeciesMenu} animationDirection='fade'> 
                <div className={classes['species-menu']}>
                    { speciesTree }
                </div>
            </Modal>
        );
    }    

    return false;
}


export default SpeciesMenu;