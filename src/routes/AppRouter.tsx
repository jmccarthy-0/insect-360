//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './pages/Index';
import SpeciesDetailsPage from './pages/SpeciesDetailsPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={import.meta.env.BASE_URL} element={<Layout />}> {/* Replace insect-360 pathing for index once we're off githubpage config*/}
                    <Route index={true} element={<Index />} />
                    <Route path=":speciesId" element={ <SpeciesDetailsPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;