import './App.css';
import GameController from './components/GameController';
import Header from '../src/components/header/Header';
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="game">
        <GameController />
      </div>
    </div>
  );
}

export default App;
