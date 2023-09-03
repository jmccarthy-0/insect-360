import Btn from '../Btn/Btn';

import species from '../assets/species-tree.json';

import styles from './SpeciesMenu.module.css';
import btnStyles from '../Btn/Btn.module.css';

interface Taxon {
    rank: string;
    name: string;
    children?: Taxon[];
    sid?: string;
}


const buildTree = (data: Taxon[]) => {
    return (
        <ul className={`${data[0].rank}List`} >
            {
                data.map((taxon: Taxon, index: number) => {
                    if (taxon.rank !== 'species' && (!taxon.children || !taxon.children.length)) {
                        return null;
                    }
                    
                    return (
                        <li key={index} className={taxon.rank}>
                            { 
                                taxon.rank == 'species' ? <Btn handleClick={() => taxon.sid} classes={`${btnStyles['btn--link']}`}>{taxon.name}</Btn> : taxon.name
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

const SpeciesMenu = () => {
    const tree = buildTree(species);
    
    return (
        <div className={styles['species-menu']}>
            {tree}
        </div>
    );
}


export default SpeciesMenu;