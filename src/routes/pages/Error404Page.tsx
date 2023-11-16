import { useRouteError } from "react-router-dom";
import Error404 from "@components/global/Error404/Error404"

const Error404Page = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <Error404 />
    );
};

export default Error404Page;