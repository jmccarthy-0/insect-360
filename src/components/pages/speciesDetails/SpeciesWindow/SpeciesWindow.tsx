import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";
import { Taxon } from "@utils/ts/types";

import Loader from "@components/global/Loader/Loader";
const PageIntro = lazy(() => import("../PageIntro/PageIntro"));
const SequenceViewer = lazy(
  () => import("@components/sequenceViewers/SequenceViewer/SequenceViewer"),
);

const SpeciesWindow = () => {
  const species = useLoaderData() as Taxon;

  return (
    <main className="grid grid-cols-1 grid-rows-max-1fr gap-y-12 py-14">
      <Suspense fallback={<Loader />}>
        {species && <PageIntro content={species.details} />}
        {species && <SequenceViewer species={species} key={species.sid} />}
      </Suspense>
    </main>
  );
};

export default SpeciesWindow;
