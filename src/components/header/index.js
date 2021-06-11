import React from 'react';

const Header = ({ money }) => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand">capitalist-adventure</span>
      <h4>{`$ ${money}`}</h4>
    </div>
  </nav>
);

export default Header;
