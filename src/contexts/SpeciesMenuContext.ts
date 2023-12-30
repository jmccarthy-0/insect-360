import { createContext } from 'react';

export interface SpeciesMenuContextType {
    displaySpeciesMenu: boolean;
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
  
export const SpeciesMenuContext = createContext<SpeciesMenuContextType>({
    displaySpeciesMenu: false,
    setDisplaySpeciesMenu: () => {return null},
});