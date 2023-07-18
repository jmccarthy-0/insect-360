import './App.css'
import Header from './Header/Header';
import PageIntro from './PageIntro/PageIntro';
import SequenceViewer from './SequenceViewer/SequenceViewer';

const App = () => {
  return (
    <main>
      <div className="page-grid">
        <Header />
        <div>
          <PageIntro />
          <SequenceViewer imgCount={360} />
        </div>
      </div>
    </main>
  )
}

export default App;