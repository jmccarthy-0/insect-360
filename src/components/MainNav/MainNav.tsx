import classes from './MainNav.module.css';

import Btn from '../../Btn/Btn';
import btnStyles from '../../Btn/Btn.module.css';

const MainNav = () => {
    return (
        <nav>
            <ul className={classes['nav-list']}>
                <li>
                    <Btn handleClick={() => {}} classes={btnStyles['btn--link']}>Species</Btn>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;