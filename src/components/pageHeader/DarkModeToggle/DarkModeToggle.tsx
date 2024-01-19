import { useState, useEffect } from "react";
import DarkModeToggleSR from "./DarkModeToggle_SR";
import DarkModeToggleUI from "./DarkModeToggle_UI";


const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';

        darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    }, [darkMode])

    return (
        <>  
            <DarkModeToggleSR darkMode={darkMode} setDarkMode={setDarkMode} />
            <DarkModeToggleUI darkMode={darkMode} setDarkMode={setDarkMode} />
        </>
    );
}

export default DarkModeToggle;