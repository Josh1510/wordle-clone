import React from 'react';
import './Alert.css';

export default function Alert({ alertMessage }) {
  return (
    <div className="alert-container">
      <div className="alert__message">{alertMessage}</div>
    </div>
  );
}
