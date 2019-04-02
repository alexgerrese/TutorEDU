import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Collection from './collection';
import TutorProfile from './TutorProfile';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <div>
    <div className="navbar">
      <NavBar/>
    </div>
    <Router>
      <div>
        <Route exact path="/" component={Collection} />
        <Route path="/tutors/:userID" component={TutorProfile} />
      </div>
    </Router>
  </div>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
