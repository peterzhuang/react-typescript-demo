import Counter from './Counter';
import DadJoke from './DadJoke';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter defaultCount={0} />
      <DadJoke />
    </div>
  );
}

export default App;
