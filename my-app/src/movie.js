import React, { Component } from 'react';
import './styles.css';

class Movie extends Component {
  render() {
    return (
      <div className="movie-card">
        <img src={ this.props.poster } alt={ this.props.name } className="movie-image"/>
        //<img src = {"./images/Unknown-1"}/>
      </div>
    )
  }
}

export default Movie;
