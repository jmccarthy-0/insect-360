import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";

// Components
import { Helmet } from "react-helmet";
import Loader from "@components/global/Loader/Loader";
import Citation from "@components/pages/speciesDetails/Citation/Citation";
const PageIntro = lazy(() => import("@components/pages/speciesDetails/PageIntro/PageIntro"));
const SequenceViewer = lazy(
    () => import("@components/sequenceViewers/SequenceViewer/SequenceViewer"),
);

// Types
import { SpeciesNameResponse } from "@models/gbif/Species.model";


interface SpeciesDetailData {
    speciesId: string,
    speciesDetails: SpeciesNameResponse,
    imageCount: number,
    photoMeta: {
        description: string,
        lens: string,
        flash: string,
        stacker: string
    },
}

const SpeciesDetailsPage = () => {
    const {
        speciesId, 
        imageCount,
        speciesDetails: {
            canonicalNameWithMarker, 
            bracketAuthorship,
            bracketYear
        }
    } = useLoaderData() as SpeciesDetailData;

    const pageTitle = `${import.meta.env.VITE_TITLE}: ${canonicalNameWithMarker}`;
    const pageDescription = `360° macro photography viewer for ${canonicalNameWithMarker}`;

  return (
    <>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image"
                content={`https://lookatbugs.com/species_assets/${speciesId}/sequence/${speciesId}_viewer_frame-01.webp`}
            />
            <meta property="og:image:width" content="2400" />
            <meta property="og:image:height" content="1800" />
        </Helmet>
        <main className="grid grid-cols-1 grid-rows-max-1fr gap-y-12 py-14">
            <Suspense fallback={<Loader />}>
                <PageIntro binomialName={canonicalNameWithMarker} classifiedBy={bracketAuthorship} classifiedYear={bracketYear} />
                <SequenceViewer speciesId={speciesId} frameCount={imageCount}  key={speciesId} />
            </Suspense>
            <Citation />
        </main>
    </>
  );
};

export default SpeciesDetailsPage;
