import { useState } from 'react';
import Header from './components/Header/Header';
import MainContent from './MainContent/MainContent';

import './App.css'

const App = () => {
  const [displaySpeciesMenu, setDisplaySpeciesMenu] = useState(true);

  return (
    <main>
      <div className="page-grid">
        <Header />
        <MainContent displaySpeciesMenu={displaySpeciesMenu} />
      </div>
    </main>
  )
}

export default App;