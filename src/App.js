import Counter from './Counter';
import DadJoke from './DadJoke';
import DogImage from './DogImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter defaultCount={0} />
      <DadJoke />
      <DogImage />
    </div>
  );
}

export default App;
