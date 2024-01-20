import DarkModeToggle from "@components/pageHeader/DarkModeToggle/DarkModeToggle";
import MainNav from "@components/pageHeader/MainNav/MainNav";

const Header = () => {
    return (
        <header className="relative flex gap-x-4 justify-between py-4 border-b border-muted-dark dark:border-muted-light text-primary-dark dark:text-primary-light">
            <MainNav />
            <DarkModeToggle />
        </header>
    );
}

export default Header;