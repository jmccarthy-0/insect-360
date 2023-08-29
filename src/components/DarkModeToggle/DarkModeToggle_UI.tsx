import { useCallback } from "react";

interface DarkModeToggleProps {
    darkMode: boolean;
    setDarkMode: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const DarkModeToggleUI = ({darkMode, setDarkMode}: DarkModeToggleProps) => {

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevDarkMode => !prevDarkMode);
    }, []);

    return (
        <div className="dark-mode-toggle">
            <span>Light</span>
            <div className={`dark-mode-toggle__input ${darkMode ? 'dark-mode-toggle__input--dark' : ''}`} onClick={toggleDarkMode} aria-hidden="true"></div>
            <span>Dark</span>
        </div>
    );

}

export default DarkModeToggleUI;