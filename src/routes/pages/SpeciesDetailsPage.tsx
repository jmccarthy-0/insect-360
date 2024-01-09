import {Helmet} from "react-helmet";
import { useLoaderData } from 'react-router-dom';
import SpeciesWindow from "@components/pages/speciesDetails/SpeciesWindow/SpeciesWindow";
import { Taxon } from '@utils/ts/types';


const SpeciesDetailsPage = () => {
    const species = useLoaderData() as Taxon;
    const {binomialName, commonName} = species.details;

    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_TITLE}: {binomialName} ({commonName})</title>
                <meta name="description" content={`360° macro photography viewer for ${binomialName}`}/>
            </Helmet>
            <SpeciesWindow />
        </>
    )
}

export default SpeciesDetailsPage;