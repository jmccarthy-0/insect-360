import { useState, useEffect, Suspense, lazy } from 'react';
import { Taxon } from '../utils/ts/types';

import Loader from '../Loader/Loader';
const PageIntro = lazy(() => import('../PageIntro/PageIntro'));
const SequenceViewer = lazy(() => import('../SequenceViewer/SequenceViewer'));

import { fetchData } from '../utils/ts/fetch-utils';

import classes from './MainContent.module.css';



interface MainContentProps {
  activeSpeciesId: string
}

const MainContent = ({activeSpeciesId}:MainContentProps) => {
  const [species, setSpecies] = useState<Taxon | null>(null);

  // Fetch species data from json endpoint
  useEffect(() => {
    const fetchSpeciesData= async (sid: string) => {
      const data: Taxon | null = await fetchData(`/species_data/${sid}.json`);
      setSpecies(data);
    }

    fetchSpeciesData(activeSpeciesId);
  }, [])



  return (
      <main className={classes['main-content']}>
        <Suspense fallback={<Loader />}>
          {species && <PageIntro content={species.details} />}
          {species && <SequenceViewer species={species} />}
        </Suspense>
      </main>
  );
}

export default MainContent;