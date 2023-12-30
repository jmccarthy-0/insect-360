import { useEffect, useState, useContext } from "react";

import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

import Btn from "@components/global/Btn/Btn";

import classes from './AppIntro.module.css';



const AppIntro = () => {
    const [borderHeight, setBorderHeight] = useState('0');
    const {setDisplaySpeciesMenu} = useContext(SpeciesMenuContext);
    
    useEffect(() => {
        setTimeout(() => {
            setBorderHeight('1');
        } , 800);
    }, []);

    const handleClick = () => {
        setDisplaySpeciesMenu(true);
    };

    return (
        <div className={classes['app-intro']}>
            <div className={classes['page-header']} style={{ '--border-height': borderHeight } as React.CSSProperties}>
                <h1 className={classes['page-title']}><span className={classes['app-name']}>Lantern:</span> <span className={classes['tag-line']}>A Digital Field Guide</span></h1>
                
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