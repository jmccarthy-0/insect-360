import { useEffect, useState } from "react";

import Btn from "../Btn/Btn";

import classes from './AppIntro.module.css';

interface AppIntroProps {
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const AppIntro = ({setDisplaySpeciesMenu}: AppIntroProps) => {
    const [borderHeight, setBorderHeight] = useState('0');
    
    useEffect(() => {
        setTimeout(() => {
            setBorderHeight('1');
        } , 800);
    }, []);

    // Reuseable functionality: 
    // Custom hook candidate?
    const handleClick = () => {
        setDisplaySpeciesMenu(true);
    };

    return (
        <div className={classes['app-intro']}>
            <div className={classes['page-header']} style={{ '--border-height': borderHeight } as React.CSSProperties}>
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