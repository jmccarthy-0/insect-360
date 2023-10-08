//import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './pages/Index';
import SpeciesDetailsPage from './pages/SpeciesDetailsPage';

const AppRouter = () => {
    const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
    
    return (
        <Router>
            <Routes>
                <Route path={import.meta.env.BASE_URL} element={<Layout displaySpeciesMenu={displaySpeciesMenu} setDisplaySpeciesMenu={setDisplaySpeciesMenu} />}> {/* Replace insect-360 pathing for index once we're off githubpage config*/}
                    <Route index={true} element={<Index setDisplaySpeciesMenu={setDisplaySpeciesMenu} />} />
                    <Route path=":speciesId" element={ <SpeciesDetailsPage /> } />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;