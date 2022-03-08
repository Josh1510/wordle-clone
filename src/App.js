import './App.css';
import AnswerGrid from './components/AnswerGrid';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div>
      <header></header>
      <div className="game">
        <AnswerGrid />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
