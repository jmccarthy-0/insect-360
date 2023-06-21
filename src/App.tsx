import './App.css'
import SequenceViewer from './SequenceViewer/SequenceViewer';

const App = () => {
  return (
    <main>
      <div className="page-grid">
        <div>
          <h1>Protoxaea gloriosa</h1>
          <p></p>
        </div>
        <SequenceViewer imgCount={360} />
      </div>
    </main>
  )
}

export default App
