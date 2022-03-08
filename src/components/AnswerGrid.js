import React from 'react';
import './AnswerGrid.css';

const AnswerGrid = () => {
  return (
    <div className="answer-grid-container">
      <div className="answer-grid">
        <div className="answer-grid__tile" data-state="correct">
          A
        </div>
        <div className="answer-grid__tile" data-state="incorrect">
          b
        </div>
        <div className="answer-grid__tile" data-state="incorrect-position">
          c
        </div>
        <div className="answer-grid__tile" data-state="empty">
          d
        </div>
        <div className="answer-grid__tile" data-state="empty">
          e
        </div>

        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
        <div className="answer-grid__tile" data-state="empty"></div>
      </div>
    </div>
  );
};

export default AnswerGrid;
