import { MAX_WORD_LENGTH } from '../../constants/settings';

import React from 'react';

export default function EmptyRow() {
  let emptyRow = Array.from({ length: MAX_WORD_LENGTH }, (v, i) => i);

  return (
    <div className="answer-grid__row">
      {emptyRow.map((_, i) => (
        <div className="answer-grid__tile" data-state="empty" key={i}></div>
      ))}
    </div>
  );
}
