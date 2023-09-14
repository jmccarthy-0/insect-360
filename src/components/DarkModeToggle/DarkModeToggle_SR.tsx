import { useCallback, ChangeEvent } from "react";

interface DarkModeToggleProps {
    darkMode: boolean;
    setDarkMode: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const DarkModeToggleSR = ({darkMode, setDarkMode}: DarkModeToggleProps) => {

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.value === 'dark');
    }, []);

    return (
        <form className="sr-only"> 
            <input type="radio" name="theme" id="light" value="light" checked={!darkMode} onChange={handleChange}/>
            <label htmlFor="light">Light</label>
            <input type="radio" name="theme" id="dark" value="dark" checked={darkMode}  onChange={handleChange}/>
            <label htmlFor="dark">Dark</label>
        </form>
    );
}

export default DarkModeToggleSR;