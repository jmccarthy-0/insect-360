import { useState, useEffect, Suspense, lazy } from 'react';
import { Taxon } from '../utils/ts/types';

import Loader from '../Loader/Loader';
import PageIntro from '../PageIntro/PageIntro';

const SequenceViewer = lazy(() => import('../SequenceViewer/SequenceViewer'));

import { fetchData } from '../utils/ts/fetch-utils';


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
      <>
        <PageIntro />
        <Suspense fallback={<Loader />}>
          {species && <SequenceViewer imgCount={species.images.sequenceFramecount} imgPath={species.images.paths.sequence.path} />}
        </Suspense>
      </>
  );
}

export default MainContent;