import { useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './MainContent/MainContent';
import SpeciesMenu from './SpeciesMenu/SpeciesMenu';

import './App.css'

const App = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(true);
  const [activeSpecies, setActiveSpecies] = useState<string | null>(null);

  return (
    <main>
      <div className="page-grid">
        <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} /> {/*  Remove excessive prop drilling here*/} 
        <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} setActiveSpecies={setActiveSpecies} />
        <MainContent />
      </div>
    </main>
  )
}

export default App;