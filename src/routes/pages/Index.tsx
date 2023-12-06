import {Helmet} from "react-helmet";
import AppIntro from "@components/pages/home/AppIntro/AppIntro";

const Index = () => {
    return (
        <>
            <Helmet>
                <title>Lantern: A Digital Field Guide</title>
                <meta name="description" content="See hi-res, 360-degree macro images of a variety of insect species." />
            </Helmet>
            <AppIntro />
        </>
    )
}

export default Index;