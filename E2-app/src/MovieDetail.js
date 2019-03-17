import React, { Component } from 'react';
import './styles.css';

class MovieDetail extends Component {
  render() {
    return (
      <div className="movie-description">
        <h1>{ this.props.name }</h1>
<<<<<<< HEAD
        <h2>{ this.props.description }</h2>
        <h3>{ this.props.date }</h3>
=======
        <h2>{ this.props.date }</h2>
        <h3>{ this.props.description }</h3>
>>>>>>> bab65d630308d6b63df33031b7e808eb62ecb9ec
      </div>
    )
  }
}

export default MovieDetail;
