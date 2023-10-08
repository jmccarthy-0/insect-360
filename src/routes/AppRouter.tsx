//import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './Index';

import '../App.css';

const AppRouter = () => {
    const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
    
    return (
        <Router>
            <Layout displaySpeciesMenu={displaySpeciesMenu} setDisplaySpeciesMenu={setDisplaySpeciesMenu}>
                <Routes>
                    <Route index path="/insect-360" element={<Index setDisplaySpeciesMenu={setDisplaySpeciesMenu}  />} /> {/* Replace insect-360 pathing for index once we're off githubpage config*/}
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter;