//import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Index from './pages/Index';
import SpeciesDetailsPage from './pages/SpeciesDetailsPage';
import Error404 from './pages/Error404';
import { fetchData } from '../utils/ts/fetch-utils';

const router = createBrowserRouter([
    {
      path: import.meta.env.BASE_URL,
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
            path: 'species/:speciesId',
            element: <SpeciesDetailsPage />,
            loader: async ({ params }) => {
                return await fetchData(`http://127.0.0.1:8000/species/${params.speciesId}`);
            }
        }
      ],
    },
]);

export default router;