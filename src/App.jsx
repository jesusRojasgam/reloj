import DigitalClock from './components/DigitalClock.jsx';
import './App.css';
import CountDown from './components/CountDown.jsx';
import Stopwatch from './components/Stopwatch.jsx';

function App() {
  return (
    <div className="App">
      <DigitalClock/>
      <CountDown/>
      <Stopwatch/>
    </div>
  );
}

export default App;
