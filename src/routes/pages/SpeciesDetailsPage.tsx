import { useEffect } from "react";
import { useParams } from "react-router-dom";

import SpeciesWindow from "../../components/MainContent/SpeciesWindow";

const SpeciesDetailsPage = () => {
    const { speciesId } = useParams();

    useEffect(() => {
        console.log({speciesId});
    }, [speciesId]);

    if (!speciesId) {
        return 'Did not find page'
    }

    return <SpeciesWindow activeSpeciesId={speciesId}/>
}

export default SpeciesDetailsPage;