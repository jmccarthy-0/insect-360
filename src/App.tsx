import './App.css'
import Header from './Header/Header';
import PageIntro from './PageIntro/PageIntro';
import SequenceViewer from './SequenceViewer/SequenceViewer';

const App = () => {
  return (
    <main>
      <div className="page-grid">
        <Header />
        <PageIntro />
        <SequenceViewer imgCount={360} />
      </div>
    </main>
  )
}

export default App;