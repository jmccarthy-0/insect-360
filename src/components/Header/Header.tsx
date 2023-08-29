import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import MainNav from "../MainNav/MainNav";

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <MainNav />
            <DarkModeToggle />
        </header>
    );
}

export default Header;