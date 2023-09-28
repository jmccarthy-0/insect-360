import Btn from "../Btn/Btn";

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
            <div className={classes['page-header']}>
                <h1 className={classes['page-title']}><span className={classes['app-name']}>BioSphere:</span> <span className={classes['tag-line']}>A Digital Field Guide</span></h1>
                
                <div className={classes['btn-wrapper']}>
                    <Btn handleClick={handleClick}>
                        Species
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default AppIntro;