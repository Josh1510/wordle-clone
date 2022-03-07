import './App.css';
import { ReactComponent as BackspaceImg } from './backspace.svg';

function App() {
  return (
    <div>
      <header></header>

      <div className="keyboard">
        <button className="key" data-key="Q">
          Q
        </button>
        <button className="key" data-key="W">
          W
        </button>
        <button className="key" data-key="E">
          E
        </button>
        <button className="key" data-key="R">
          R
        </button>
        <button className="key" data-key="T">
          T
        </button>
        <button className="key" data-key="Y">
          Y
        </button>
        <button className="key" data-key="U">
          U
        </button>
        <button className="key" data-key="I">
          I
        </button>
        <button className="key" data-key="O">
          O
        </button>
        <button className="key" data-key="P">
          P
        </button>
        <div className="buttonSpace"></div>
        <button className="key" data-key="A">
          A
        </button>
        <button className="key" data-key="S">
          S
        </button>
        <button className="key" data-key="D">
          D
        </button>
        <button className="key" data-key="F">
          F
        </button>
        <button className="key" data-key="G">
          G
        </button>
        <button className="key" data-key="H">
          H
        </button>
        <button className="key" data-key="J">
          J
        </button>
        <button className="key" data-key="K">
          K
        </button>
        <button className="key" data-key="L">
          L
        </button>
        <div className="buttonSpace"></div>
        <button className="key large" data-enter>
          ENTER
        </button>
        <button className="key" data-key="Z">
          Z
        </button>
        <button className="key" data-key="X">
          X
        </button>
        <button className="key" data-key="C">
          C
        </button>
        <button className="key" data-key="V">
          V
        </button>
        <button className="key correct" data-key="B">
          B
        </button>
        <button className="key wrongPosition" data-key="N">
          N
        </button>
        <button className="key incorrect" data-key="M">
          M
        </button>
        <button className="key large" data-backspace>
          <BackspaceImg />
        </button>
      </div>
    </div>
  );
}

export default App;
