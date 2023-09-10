import Btn from "../../Btn/Btn";

import classes from './AppIntro.module.css';

interface AppIntroProps {
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const AppIntro = ({setDisplaySpeciesMenu}: AppIntroProps) => {
    // Reuseable functionality: 
    // Custom hook candidate?
    const handleClick = () => {
        setDisplaySpeciesMenu(true);
    };

    return (
        <div className={classes['app-intro']}>
            <h1 className={classes['page-title']}>Insect360: A Digital Field Guide</h1>
            <p>Choose a species from the menu to get started.</p>
            <div className={classes['btn-wrapper']}>
                <Btn handleClick={handleClick}>
                    Species
                </Btn>
            </div>
        </div>
    );
};

export default AppIntro;