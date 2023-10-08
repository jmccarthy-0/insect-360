import { useEffect } from "react";
import { useParams } from "react-router-dom";

import MainContent from "../../components/MainContent/MainContent";

const SpeciesDetails = () => {
    const { slug } = useParams();

    useEffect(() => {
        console.log({slug});
    }, [slug]);

    if (!slug) {
        return 'cum'
    }

    return <MainContent activeSpeciesId={slug}/>
}

export default SpeciesDetails;