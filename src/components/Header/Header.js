import React, { useState } from "react";
import "./header.scss";

export const Header = ({headerLeft, headerRight, handleClick}) => {

  const [greeting, setGreeting] = useState('hello world!');

  const callMe = (event) => {
    setGreeting('trurth me');
    console.log('event', event);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4 header__left">
            <p onClick={handleClick}>{headerLeft ? headerLeft : 'Header logo'}</p>
            <p onClick={event => callMe(event)}>{greeting}</p>
          </div>
          <div className="col-md-8 header__right">
            <p>{headerRight ? headerRight : 'Header menu'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}