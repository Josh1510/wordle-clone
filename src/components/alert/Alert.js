import React from 'react';
import './Alert.css';

export default function Alert({ alertMessage, isGameActive }) {
  return (
    <div className="alert-container">
      {/* keep alert on screen if game is over. */}
      <div className={isGameActive ? 'alert__message-fade' : 'alert__message-remain'}>{alertMessage}</div>
    </div>
  );
}
