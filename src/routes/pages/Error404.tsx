import { useRouteError } from "react-router-dom";
import Error404Content from "../../components/Error404Content/Error404Content"

const Error404 = () => {
    const error = useRouteError();
    console.error(error);
    
    return (
        <Error404Content />
    );
};

export default Error404;