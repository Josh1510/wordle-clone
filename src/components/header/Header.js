import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__title">Wordle Clone</div>
      <div className="gitHub-link__container">
        <a href="https://github.com/Josh1510/wordle-clone">
          <div className="gitHub-link__content">
            <div>GitHub Link</div>
            <img src="GitHub-Mark-Light-32px.png" alt="GitHub Link" />
          </div>
        </a>
      </div>
    </div>
  );
}
