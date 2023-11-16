import DarkModeToggle from "@components/pageHeader/DarkModeToggle/DarkModeToggle";
import MainNav from "@components/pageHeader/MainNav/MainNav";

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