import styles from './SpeciesMenu.module.css';

import species from '../assets/species.json';

console.log(species);

interface Taxon {
    rank: string;
    name: string;
    children?: Taxon[];
}


const buildTree = (data: Taxon[]) => {
    return (
        <ul className={`${data[0].rank}List`} >
            {data.map((taxon: Taxon, index: number) => {
                if (taxon.rank !== 'species' && (!taxon.children || !taxon.children.length)) {
                    return null;
                }
                
                return (
                    <li key={index} className={taxon.rank}>
                        { 
                            taxon.rank == 'species' ? <button>{taxon.name}</button> : taxon.name
                        }

                        {
                            taxon.children && taxon.children.length > 0 && buildTree(taxon.children)
                        }
                    </li>
                );
            }
            )}
        </ul>
    );
}

const SpeciesMenu = () => {
    const tree = buildTree(species);
    
    return (
        <div className={styles.speciesMenu}>
            {tree}
        </div>
    );
}


export default SpeciesMenu;