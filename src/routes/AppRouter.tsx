import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";
import SpeciesDetailsPage from "./pages/SpeciesDetailsPage";
import Error404Page from "./pages/Error404Page";
import { fetchData } from "../utils/ts/fetch-utils";
import { SpeciesNameResponse } from "@models/gbif/Species.model";

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
        loader: async ({ params: { speciesId } }) => {
            // Mock
            if (import.meta.env.VITE_MOCKAPI) {
                const speciesData = await import(`../data/species.json`);

                const speciesMeta =
                    speciesData.default[speciesId as keyof typeof speciesData.default];

                const gbifData: SpeciesNameResponse = await fetchData(
                    `${import.meta.env.VITE_GBIF_API}species/${speciesMeta.taxonId}/name`,
                );

                return {
                    speciesId: speciesMeta.sid,
                    speciesDetails: gbifData,
                    imageCount: speciesMeta.imageCount,
                    photoMeta: speciesMeta.photoMeta,
                };
            }

            // API
            return await fetchData(
                `${import.meta.env.VITE_API}/species/${speciesId}`,
            );
        },
      },
    ],
  },
]);

export default router;
