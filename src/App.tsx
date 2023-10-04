import { useState } from 'react';
import AppIntro from './components/AppIntro/AppIntro';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import SpeciesMenu from './components/SpeciesMenu/SpeciesMenu';

import { getQueryParam } from './utils/ts/query-utils';

import './App.css'

const App = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(false);
  const [activeSpecies, setActiveSpecies] = useState<string | null>(getQueryParam('sid'));

  const content = activeSpecies ? <MainContent activeSpeciesId={activeSpecies} /> : <AppIntro setDisplaySpeciesMenu={setDisplaySpeciesMenu} />;

  return (
    <div className={'app'}>
      <div className="page-grid">
        <Header setDisplaySpeciesMenu={setDisplaySpeciesMenu} /> {/*  Remove excessive prop drilling here*/} 
        <SpeciesMenu displayMenu={displaySpeciesMenu} setDisplayMenu={setDisplaySpeciesMenu} setActiveSpecies={setActiveSpecies} />
        { content } 
      </div>
    </div>
  )
}

export default App;