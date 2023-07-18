import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <DarkModeToggle />
            <nav>
                <ul>
                    <li>
                        <button>Species</button>
                    </li>
                    <li>
                        <button>Search</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;