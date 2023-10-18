//import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from './pages/Index';
import SpeciesDetailsPage from './pages/SpeciesDetailsPage';
import Error404 from './pages/Error404';

const router = createBrowserRouter([
    {
      path: import.meta.env.BASE_UR,
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
            path: 'species/:speciesId',
            element: <SpeciesDetailsPage />
        }
      ],
    },
]);

export default router;