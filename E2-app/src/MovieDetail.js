import React, { Component } from 'react';
import './styles.css';

class MovieDetail extends Component {
  render() {
    return (
      <div className="movie-description">
        <h1>{ this.props.name }</h1>
        <h2>{ this.props.date }</h2>
        <h3>{ this.props.description }</h3>
      </div>
    )
  }
}

export default MovieDetail;
