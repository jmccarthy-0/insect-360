import './App.css'
import PageIntro from './PageIntro/PageIntro';
import SequenceViewer from './SequenceViewer/SequenceViewer';

const App = () => {
  return (
    <main>
      <div className="page-grid">
        <PageIntro />
        <SequenceViewer imgCount={360} />
      </div>
    </main>
  )
}

export default App
