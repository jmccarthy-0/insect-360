import { useCallback } from "react";
import Icon from "../../global/Icon/Icon";

interface DarkModeToggleProps {
  setDarkMode: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const DarkModeToggleUI = ({ setDarkMode }: DarkModeToggleProps) => {
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }, []);

  return (
    <div className="flex items-center gap-x-2 [&_path]:fill-primary-dark dark:[&_path]:fill-primary-light">
      <Icon icon="light" />
      <div
        className={
          'relative h-6 w-12 cursor-pointer rounded-xl border border-primary-light bg-muted-dark after:absolute after:-left-px after:-top-px after:h-6 after:w-6 after:rounded-full after:border after:border-primary-dark after:bg-primary-light after:transition-[transform,background-color] after:duration-150 after:content-[""] dark:border-primary-dark dark:bg-muted-light dark:after:translate-x-full dark:after:border-primary-light dark:after:bg-primary-dark'
        }
        onClick={toggleDarkMode}
        aria-hidden="true"
      ></div>
      <Icon icon="dark" />
    </div>
  );
};

export default DarkModeToggleUI;
