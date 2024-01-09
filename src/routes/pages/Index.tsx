import {Helmet} from "react-helmet";
import AppIntro from "@components/pages/home/AppIntro/AppIntro";

const Index = () => {
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_TITLE}</title>
                <meta name="description" content="An online resource offering interactive 360° macro image displays of a variety of insect species." />
            </Helmet>
            <AppIntro />
        </>
    )
}

export default Index;