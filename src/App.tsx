import { useState, useMemo } from 'react';
import AppIntro from './components/AppIntro/AppIntro';
import Header from './components/Header/Header';
import MainContent from './MainContent/MainContent';
import SpeciesMenu from './SpeciesMenu/SpeciesMenu';

import './App.css'

const App = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
  const [activeSpecies, setActiveSpecies] = useState<string | null>(null);

  let content = activeSpecies ? <MainContent activeSpeciesId={activeSpecies} /> : <AppIntro setDisplaySpeciesMenu={setDisplaySpeciesMenu} />;

  return (
    <main>
      <div className="page-grid">
        <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} /> {/*  Remove excessive prop drilling here*/} 
        <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} setActiveSpecies={setActiveSpecies} />
        { content } 
      </div>
    </main>
  )
}

export default App;