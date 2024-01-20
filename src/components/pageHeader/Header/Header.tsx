import DarkModeToggle from "@components/pageHeader/DarkModeToggle/DarkModeToggle";
import MainNav from "@components/pageHeader/MainNav/MainNav";

const Header = () => {
  return (
    <header className="relative flex justify-between gap-x-4 border-b border-muted-dark py-4 text-primary-dark dark:border-muted-light dark:text-primary-light">
      <MainNav />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
