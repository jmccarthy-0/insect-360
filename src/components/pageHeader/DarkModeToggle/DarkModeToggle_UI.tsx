import { useCallback } from "react";
import Icon from "../../global/Icon/Icon";

interface DarkModeToggleProps {
    setDarkMode: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const DarkModeToggleUI = ({setDarkMode}: DarkModeToggleProps) => {

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }, []);

    return (
        <div className="flex items-center gap-x-2 [&_path]:fill-primary-dark dark:[&_path]:fill-primary-light">
            <Icon icon="light" />
            <div className={'relative w-12 h-6 bg-muted-dark dark:bg-muted-light rounded-xl border border-primary-light dark:border-primary-dark cursor-pointer after:content-[""] after:absolute after:-top-px after:-left-px after:w-6 after:h-6 after:bg-primary-light dark:after:bg-primary-dark after:border after:border-primary-dark dark:after:border-primary-light after:rounded-full after:transition-[transform,background-color] after:duration-150 dark:after:translate-x-full'} onClick={toggleDarkMode} aria-hidden="true"></div>
            <Icon icon="dark" />
        </div>
    );

}

export default DarkModeToggleUI;