import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import MainNav from "../MainNav/MainNav";

import './Header.css';

interface HeaderProps {
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Header = ({ setDisplaySpeciesMenu }: HeaderProps) => {
    return (
        <header className="header">
            <MainNav setDisplaySpeciesMenu={setDisplaySpeciesMenu} />
            <DarkModeToggle />
        </header>
    );
}

export default Header;