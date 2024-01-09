import { useEffect, useState, useContext } from "react";

import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

import Btn from "@components/global/Btn/Btn";

import IntroStyles from './AppIntro.module.css';



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
        <div className={IntroStyles['app-intro']}>
            <div className={IntroStyles['page-header']} style={{ '--border-height': borderHeight } as React.CSSProperties}>
                <h1 className={IntroStyles['page-title']}>{import.meta.env.VITE_TITLE}</h1> 
                <p className={IntroStyles['tag-line']}>Explore high resolution insect anatomy from every angle with LAB. Select a species to get started.</p>
                
                <div className={IntroStyles['btn-wrapper']}>
                    <Btn handleClick={handleClick}>
                        Species
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default AppIntro;