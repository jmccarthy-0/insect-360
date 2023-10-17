import { useState, useEffect, Suspense, lazy } from 'react';
import { Taxon } from '../../utils/ts/types';

import Loader from '../Loader/Loader';
const PageIntro = lazy(() => import('../PageIntro/PageIntro'));
const SequenceViewer = lazy(() => import('../SequenceViewer/SequenceViewer'));

import { fetchData } from '../../utils/ts/fetch-utils';

import classes from './SpeciesWindow.module.css';



interface MainContentProps {
  activeSpeciesId: string
}

const SpeciesWindow = ({activeSpeciesId}:MainContentProps) => {
  const [species, setSpecies] = useState<Taxon | null>(null);

  // Fetch species data from json endpoint
  useEffect(() => {
    const fetchSpeciesData= async (sid: string) => {
      const data: Taxon | null = await fetchData(`http://127.0.0.1:8000/species/${sid}`);
      setSpecies(data);
    }

    fetchSpeciesData(activeSpeciesId);
  }, [])



  return (
      <main className={classes['species-window']}>
        <Suspense fallback={<Loader />}>
          {species && <PageIntro content={species.details} />}
          {species && <SequenceViewer species={species} />}
        </Suspense>
      </main>
  );
}

export default SpeciesWindow;