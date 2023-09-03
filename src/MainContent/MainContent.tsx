import PageIntro from '../PageIntro/PageIntro';
import SequenceViewer from '../SequenceViewer/SequenceViewer';
import SpeciesMenu from '../SpeciesMenu/SpeciesMenu';

import styles from './MainContent.module.css';

interface MainContentProps {
    displaySpeciesMenu: boolean
}

const MainContent = ({displaySpeciesMenu}: MainContentProps) => {
    return (
        <main className={styles.mainContent}>
          {displaySpeciesMenu && <SpeciesMenu />}
          <PageIntro />
          <SequenceViewer imgCount={360} />
        </main>
    );
}

export default MainContent;