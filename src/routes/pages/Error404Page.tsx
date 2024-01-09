import { useRouteError } from "react-router-dom";
import Error404 from "@components/global/Error404/Error404"
import { Helmet } from "react-helmet";

const Error404Page = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_TITLE}: 404 Not Found</title>
            </Helmet>
            <Error404 />
        </>
    );
};

export default Error404Page;