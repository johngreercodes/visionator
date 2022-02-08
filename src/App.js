import logo from './logo.svg';
import './App.css';
import Vision from './components/Vision'
import visions from './data/visions'

function App() {
  return (
    <div>
      <p>today's vision:</p>
      <Vision visions={visions}/>
    </div>
  );
}

export default App;
