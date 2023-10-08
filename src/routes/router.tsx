//import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './Index';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/insect-360/"
            element={ <Layout /> }
        >
            <Route index element={<Index />} />
        </Route>
    )
);