import PageIntro from '../PageIntro/PageIntro';
import SequenceViewer from '../SequenceViewer/SequenceViewer';
import SpeciesMenu from '../SpeciesMenu/SpeciesMenu';

import styles from './MainContent.module.css';

interface MainContentProps {
    displaySpeciesMenu: boolean
}

const MainContent = ({displaySpeciesMenu}: MainContentProps) => {
    if (displaySpeciesMenu) {
        return <SpeciesMenu />;
    }

    return (
        <>
          <PageIntro />
          <SequenceViewer imgCount={360} />
        </>
    );
}

export default MainContent;