import PageIntro from '../PageIntro/PageIntro';
import SequenceViewer from '../SequenceViewer/SequenceViewer';



const MainContent = () => {
    return (
        <>
          <PageIntro />
          <SequenceViewer imgCount={360} />
        </>
    );
}

export default MainContent;