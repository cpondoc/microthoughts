import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Header from './pages/Header';
import Thought from './pages/Thought';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// Create Tabletop object
const Tabletop = require('tabletop');
    
// Public spreadsheet URL
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1AzL27GK4S84b9d6kB8rBb3hXReFodR8UmDl75SxEPTc/edit?usp=sharing';

// Define callback for Tabletop objeect
Tabletop.init( { key: publicSpreadsheetUrl,
  simpleSheet: true } ).then(function(data, tabletop) {

      // Creating variable for all of the articles
      const articles = data.map((article, index) =>
        <section className="article">
          <Thought key={index} name={article['Title']} message={article['Thought']} />
        </section>
      );

      // Rendering React
      ReactDOM.render(
        <React.StrictMode>
          <Header />
          <div className="container">{articles}</div>
        </React.StrictMode>,
        document.getElementById('root')
      );
}) 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
