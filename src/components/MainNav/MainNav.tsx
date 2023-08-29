import classes from './MainNav.module.css';

const MainNav = () => {
    return (
        <nav>
            <ul className={classes['nav-list']}>
                <li>
                    <button>Species</button>
                </li>
                <li>
                    <button>Search</button>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;