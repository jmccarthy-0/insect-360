//import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Index from './pages/Index';
import SpeciesDetails from './pages/SpeciesDetails';

import '../App.css';

const AppRouter = () => {
    const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
    
    return (
        <Router>
            <Layout displaySpeciesMenu={displaySpeciesMenu} setDisplaySpeciesMenu={setDisplaySpeciesMenu}>
                <Routes>
                    <Route path="insect-360"> {/* Replace insect-360 pathing for index once we're off githubpage config*/}
                        <Route index={true} element={<Index setDisplaySpeciesMenu={setDisplaySpeciesMenu} />} />
                        <Route path=":slug" element={ <SpeciesDetails /> } />
                    </Route>
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter;