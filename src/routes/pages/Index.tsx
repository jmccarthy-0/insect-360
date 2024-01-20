import { Helmet } from "react-helmet";
import AppIntro from "@components/pages/home/AppIntro/AppIntro";

const Index = () => {
  const pageDescription =
    "An online resource offering interactive 360° macro image displays of a variety of insect species.";

  return (
    <>
      <Helmet>
        <title>{import.meta.env.VITE_TITLE}</title>
        <meta name="description" content={pageDescription} />

        {/* Open Graph */}
        <meta property="og:title" content={import.meta.env.VITE_TITLE} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content={`https://lookatbugs.com/species_assets/dolichovespula-maculata/sequence/dolichovespula-maculata_viewer_frame-01.webp`}
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1800" />
      </Helmet>
      <AppIntro />
    </>
  );
};

export default Index;
