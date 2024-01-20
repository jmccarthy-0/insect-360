import { useEffect, useState, useContext } from "react";

import { SpeciesMenuContext } from "@contexts/SpeciesMenuContext";

import Btn from "@components/global/Btn/Btn";



const AppIntro = () => {
    const [showBorder, setShowBorder] = useState(false);
    const {setDisplaySpeciesMenu} = useContext(SpeciesMenuContext);
    
    useEffect(() => {
        setTimeout(() => {
            //setBorderHeight('1');
            setShowBorder(true);
        } , 800);
    }, []);

    const handleClick = () => {
        setDisplaySpeciesMenu(true);
    };

    return (
        <div className='grid gap-y-8 place-content-center text-center'>
            <div className={`relative lg:px-8 2xl:px-16 lg:py-4 2xl:py-6 after:content-none after:lg:content-[''] after:h-full after:absolute after:top-0 after:left-px after:border-l after:border-muted-dark dark:after:border-muted-light after:origin-top ${showBorder ? 'after:scale-y-1' : 'after:scale-y-0'} after:transition-transform after:duration-300 after:ease-in`}>
                <h1 className='text-5xl md:text-6xl lg:text-8xl text-primary-dark dark:text-primary-light mb-6 lg:mb-8'>{import.meta.env.VITE_TITLE}</h1> 
                <p className='text-base mb-12 md:mb-16 md:max-w-xl lg:max-w-full text-primary-dark dark:text-primary-light'>Explore high resolution insect anatomy from every angle with LAB. Select a species to get started.</p>
                
                <div className='flex justify-center'>
                    <Btn handleClick={handleClick}>
                        Species
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default AppIntro;