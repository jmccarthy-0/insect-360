import { useContext } from 'react';
import { SpeciesMenuContext } from '../../contexts/SpeciesMenuContext';

import classes from './MainNav.module.css';

import Btn from '../Btn/Btn';
import btnStyles from '../Btn/Btn.module.css';

const MainNav = () => {
    const {setDisplaySpeciesMenu} = useContext(SpeciesMenuContext);

    const handleClick = () => { setDisplaySpeciesMenu(true) }
    
    return (
        <nav>
            <ul className={classes['nav-list']}>
                <li>
                    <Btn handleClick={handleClick} classes={btnStyles['btn--link']} ariaControls="speciesMenuModal">Species</Btn>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;