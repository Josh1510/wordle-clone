import { ReactComponent as BackspaceImg } from '../../backspace.svg';
import './Keyboard.css';

const Keyboard = ({ handleClick }) => {
  return (
    <div className="keyboard" onClick={handleClick}>
      <button className="keyboard__key" data-key="Q">
        Q
      </button>
      <button className="keyboard__key" data-key="W">
        W
      </button>
      <button className="keyboard__key" data-key="E">
        E
      </button>
      <button className="keyboard__key" data-key="R">
        R
      </button>
      <button className="keyboard__key" data-key="T">
        T
      </button>
      <button className="keyboard__key" data-key="Y">
        Y
      </button>
      <button className="keyboard__key" data-key="U">
        U
      </button>
      <button className="keyboard__key" data-key="I">
        I
      </button>
      <button className="keyboard__key" data-key="O">
        O
      </button>
      <button className="keyboard__key" data-key="P">
        P
      </button>
      <div className="keyboard__buttonSpace"></div>
      <button className="keyboard__key" data-key="A">
        A
      </button>
      <button className="keyboard__key" data-key="S">
        S
      </button>
      <button className="keyboard__key" data-key="D">
        D
      </button>
      <button className="keyboard__key" data-key="F">
        F
      </button>
      <button className="keyboard__key" data-key="G">
        G
      </button>
      <button className="keyboard__key" data-key="H">
        H
      </button>
      <button className="keyboard__key" data-key="J">
        J
      </button>
      <button className="keyboard__key" data-key="K">
        K
      </button>
      <button className="keyboard__key" data-key="L">
        L
      </button>
      <div className="keyboard__buttonSpace"></div>
      <button className="keyboard__key keyboard__large" data-enter>
        ENTER
      </button>
      <button className="keyboard__key" data-key="Z">
        Z
      </button>
      <button className="keyboard__key" data-key="X">
        X
      </button>
      <button className="keyboard__key" data-key="C">
        C
      </button>
      <button className="keyboard__key" data-key="V">
        V
      </button>
      <button className="keyboard__key" data-key="B">
        B
      </button>
      <button className="keyboard__key" data-key="N">
        N
      </button>
      <button className="keyboard__key" data-key="M">
        M
      </button>
      <button className="keyboard__key keyboard__large" data-backspace="backspace">
        <BackspaceImg className="keyboard__backspace" />
      </button>
    </div>
  );
};

export default Keyboard;
