import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SpeciesWindow from "@components/pages/speciesDetails/SpeciesWindow/SpeciesWindow";
import { Taxon } from "@utils/ts/types";

const SpeciesDetailsPage = () => {
  const species = useLoaderData() as Taxon;
  const { binomialName, commonName } = species.details;

  const pageTitle = `${import.meta.env.VITE_TITLE}: ${binomialName} (${commonName})`;
  const pageDescription = `360° macro photography viewer for ${binomialName}`;

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
          content={`https://lookatbugs.com/species_assets/${species.sid}/sequence/${species.sid}_viewer_frame-01.webp`}
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1800" />
      </Helmet>
      <SpeciesWindow />
    </>
  );
};

export default SpeciesDetailsPage;
