import React, { Component } from 'react';
import Movie from './movie';
import MovieDetail from './MovieDetail';
// testing for git
class Collection extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      clicked: false,
    };
  }


  async componentDidMount() {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e83c646d73f735bd6ce57c5238782f4c&language=en-US&page=1");
    const json = await response.json();
    this.setState({ movies: json.results });
  }

  render() {
    if(this.state.clicked == false) {
      return  (
        <div className="collection">
          {this.state.movies.map(movie => (
            <Movie poster={ "https://image.tmdb.org/t/p/w500" + movie.poster_path } name={ movie.title } />
          ))}
          </div>
        )
      }
    }
  }

export default Collection;
