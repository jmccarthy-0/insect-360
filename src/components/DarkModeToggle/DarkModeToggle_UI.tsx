import { useCallback } from "react";
import Icon from "../Icon/Icon";

interface DarkModeToggleProps {
    darkMode: boolean;
    setDarkMode: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const DarkModeToggleUI = ({darkMode, setDarkMode}: DarkModeToggleProps) => {

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }, []);

    return (
        <div className="dark-mode-toggle">
            <Icon icon="light" />
            <div className={`dark-mode-toggle__input ${darkMode ? 'dark-mode-toggle__input--dark' : ''}`} onClick={toggleDarkMode} aria-hidden="true"></div>
            <Icon icon="dark" />
        </div>
    );

}

export default DarkModeToggleUI;