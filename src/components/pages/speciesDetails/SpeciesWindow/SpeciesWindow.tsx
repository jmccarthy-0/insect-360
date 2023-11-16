import { Suspense, lazy } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Taxon } from '../../../../utils/ts/types';

import Loader from '../../../global/Loader/Loader';
const PageIntro = lazy(() => import('../PageIntro/PageIntro'));
const SequenceViewer = lazy(() => import('../../../sequenceViewers/SequenceViewer/SequenceViewer'));

import classes from './SpeciesWindow.module.css';



const SpeciesWindow = () => {
  const species = useLoaderData() as Taxon;

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