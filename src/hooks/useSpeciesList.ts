/**
 * useSpeciesList
 * 
 * Hook for fetching the main menu of species
 */

import { useEffect, useState } from "react"
import { fetchData } from "@utils/ts/fetch-utils";

// Mock data
import speciesListData from "@data/speciesList.json"

// Types
import { SpeciesListItem } from "@models/species.models";

export const useSpeciesList = () => {
    const [speciesList, setSpeciesList] = useState<SpeciesListItem[]>([]);

    useEffect(() => {
        if (import.meta.env.VITE_MOCKAPI) {
            setSpeciesList(speciesListData)
        } else {
            if (speciesList.length == 0) {
                try {
                    (async () => {
                        const data = await fetchData(`${import.meta.env.VITE_API}/species/`);
                    
                        if (data && data.success) {
                            setSpeciesList(data.body);
                        }
                    })()
                } catch (err) {
                    console.error(err)
                }
            }
        }

    }, []);

    return { speciesList }
}