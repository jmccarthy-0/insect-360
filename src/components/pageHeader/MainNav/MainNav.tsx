import { useContext } from 'react';
import { SpeciesMenuContext } from '@contexts/SpeciesMenuContext';

import classes from './MainNav.module.css';

import Btn from '@components/global/Btn/Btn';

const MainNav = () => {
    const {setDisplaySpeciesMenu} = useContext(SpeciesMenuContext);

    const handleClick = () => { setDisplaySpeciesMenu(true) }
    
    return (
        <nav>
            <ul className={classes['nav-list']}>
                <li>
                    <Btn handleClick={handleClick} classes={'link p-0 h-auto'} ariaControls="speciesMenuModal">Species</Btn>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;