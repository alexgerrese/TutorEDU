import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Collection from './Collection';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <div>
    <h1>World's Greatest Movies</h1>
    <Collection />
  </div>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
