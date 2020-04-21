import React from 'react';
import '../style/Header.css';

function Header() {
  return (
    <div className="container" id="header">
      <h1><b>Microthoughts</b></h1>
      <p>a list of <a href="http://chrispondoc.com/">pondoc's</a> wandering thoughts that are not short enough to be tweets and not too long to be articles.</p>
    </div>
  );
}

export default Header;