import { useLoaderData } from 'react-router-dom';

// Components
import { Helmet } from 'react-helmet';
import Citation from '@components/pages/speciesDetails/Citation/Citation';
import PageIntro from '@components/pages/speciesDetails/PageIntro/PageIntro';
import SequenceViewer from '@components/sequenceViewers/SequenceViewer/SequenceViewer';

// Types
import { SpeciesNameResponse } from '@models/gbif/Species.model';
import { LoaderFunctionArgs } from 'react-router-dom';
interface SpeciesDetailData {
    speciesId: string;
    speciesDetails: SpeciesNameResponse;
    imageCount: number;
    photoMeta: {
        description: string;
        lens: string;
        flash: string;
        stacker: string;
    };
}

// Utils
import { fetchData } from '@utils/ts/fetch-utils';

// Loader
export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { speciesId } = params;
    let speciesData;

    // Mock
    if (import.meta.env.VITE_MOCKAPI) {
        speciesData = await import(`../../data/species.json`);
    } else {
        speciesData = await fetchData(
            `${import.meta.env.VITE_API}/species/${speciesId}`
        );
    }

    const speciesMeta =
        speciesData.default[speciesId as keyof typeof speciesData.default];

    const gbifData: SpeciesNameResponse = await fetchData(
        `${import.meta.env.VITE_GBIF_API}species/${speciesMeta.taxonId}/name`
    );

    return {
        speciesId: speciesMeta.sid,
        speciesDetails: gbifData,
        imageCount: speciesMeta.imageCount,
        photoMeta: speciesMeta.photoMeta,
    };
};

// Page Markup
const SpeciesDetailsPage = () => {
    const {
        speciesId,
        imageCount,
        speciesDetails: {
            canonicalNameWithMarker,
            bracketAuthorship,
            bracketYear,
        },
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
                <meta
                    property="og:image"
                    content={`https://lookatbugs.com/species_assets/${speciesId}/sequence/${speciesId}_viewer_frame-01.webp`}
                />
                <meta property="og:image:width" content="2400" />
                <meta property="og:image:height" content="1800" />
            </Helmet>
            <main className="grid grid-cols-1 grid-rows-max-1fr gap-y-12 py-14 lg:grid-cols-4 lg:gap-x-8">
                <div className="lg:col-span-3">
                    <PageIntro
                        binomialName={canonicalNameWithMarker}
                        classifiedBy={bracketAuthorship}
                        classifiedYear={bracketYear}
                    />
                </div>
                <div className="lg:col-span-3">
                    <SequenceViewer
                        speciesId={speciesId}
                        frameCount={imageCount}
                        key={speciesId}
                    />
                </div>
                <div className="lg:col-span-1 lg:border-s lg:border-solid lg:border-s-muted-light lg:border-opacity-25 lg:ps-8">
                    <Citation />
                </div>
            </main>
        </>
    );
};

export default SpeciesDetailsPage;
