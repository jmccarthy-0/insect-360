import { useContext } from 'react';
import { SpeciesMenuContext } from '@contexts/SpeciesMenuContext';
import Btn from '@components/global/Btn/Btn';

const MainNav = () => {
    const {setDisplaySpeciesMenu} = useContext(SpeciesMenuContext);

    const handleClick = () => { setDisplaySpeciesMenu(true) }
    
    return (
        <nav>
            <ul className={'flex items-center gap-x-4 h-full'}>
                <li>
                    <Btn handleClick={handleClick} classes={'link p-0 h-auto'} ariaControls="speciesMenuModal">Species</Btn>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;