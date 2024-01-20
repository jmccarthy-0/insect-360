import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import SpeciesDetailsPage from "./pages/SpeciesDetailsPage";
import Error404Page from "./pages/Error404Page";
import { fetchData } from "../utils/ts/fetch-utils";

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
        loader: async ({ params }) => {
          return await fetchData(
            `${import.meta.env.VITE_API}/species/${params.speciesId}`,
          );
        },
      },
    ],
  },
]);

export default router;
