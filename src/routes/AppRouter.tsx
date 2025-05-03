import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import SpeciesDetailsPage, {loader as speciesDetailLoader} from "./pages/SpeciesDetailsPage";
import Error404Page from "./pages/Error404Page";

const router = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <Layout />,
    errorElement: <Error404Page />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "species/:speciesId",
        element: <SpeciesDetailsPage />,
        loader: speciesDetailLoader,
      },
    ],
  },
]);

export default router;
