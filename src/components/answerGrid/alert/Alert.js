import React from 'react';
import './Alert.css';

export default function Alert({ errorMessage }) {
  return (
    <div className="alert-container">
      <div className="alert__message">{errorMessage}</div>
    </div>
  );
}
