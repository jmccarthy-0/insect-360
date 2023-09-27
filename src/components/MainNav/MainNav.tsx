import classes from './MainNav.module.css';

import Btn from '../../Btn/Btn';
import btnStyles from '../../Btn/Btn.module.css';

interface MainNavProps {
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const MainNav = ({ setDisplaySpeciesMenu }: MainNavProps) => {
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