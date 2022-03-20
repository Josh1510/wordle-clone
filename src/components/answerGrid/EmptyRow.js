import { MAX_WORD_LENGTH } from '../../constants/settings';

import React from 'react';

export default function EmptyRow() {
  const emptyTiles = Array.from(Array(MAX_WORD_LENGTH));

  return (
    <div className="answer-grid__row">
      {emptyTiles.map((_, i) => (
        <div className="answer-grid__tile" data-state="empty" key={i}></div>
      ))}
    </div>
  );
}
