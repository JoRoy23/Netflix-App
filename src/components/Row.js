import React, { Component } from "react";
import movieTrailer from "movie-trailer";
import MovieTrailer from "./MovieTrailer";
import Poster from "./Poster";
import { basePosterUrl } from "../config";
import axios from "../axios";
import "../css/Row.css";

class Row extends Component {
  constructor(props) {
    super(props);
    // State of his children components ("poster", "trailer")
    this.state = {
      posters: [],
      trailer: { trailerUrl: "" },
    };
  }

  async componentDidMount() {
    // Fetching the data for every movie in each row
    const { row } = this.props;
    const request = await axios.get(row.fetchUrl);

    this.setState({ posters: request.data.results });
  }

  handleMovieClick = (movieName) => {
    // Handle click on any movie poster
    if (this.state.trailer.trailerUrl) {
      this.setState({ trailer: { trailerUrl: "" } });
    } else {
      movieTrailer(movieName)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          this.setState({ trailer: { trailerUrl: urlParams.get("v") } });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  posterUrl(movie) {
    // Creating the url for every movie poster
    const { row } = this.props;
    const posterUrl = `${basePosterUrl}${
      row.isLargeRow ? movie.poster_path : movie.backdrop_path
    }`;
    return posterUrl;
  }

  renderingRow() {
    // Rendering the movies in each row
    const { row } = this.props;
    const poster = this.state.posters.map((movie) => (
      <Poster
        key={movie.id}
        id={movie.id}
        title={movie.name || movie.original_name || movie.title}
        isPosterLarge={row.isLargeRow}
        bannerUrl={this.posterUrl(movie)}
        onMovieClick={this.handleMovieClick}
      />
    ));
    return poster;
  }

  render() {
    const { row, onRightArrowClick, onLeftArrowClick } = this.props;
    return (
      <div className="row">
        <h2 className="row__title">{row.title}</h2>
        <div className="row__posters" style={{ marginLeft: row.xPosition }}>
          <div
            className="row__previousMovie"
            onClick={() => {
              onLeftArrowClick(row.id);
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </div>
          {this.renderingRow()}
          <div
            className="row__nextMovie"
            onClick={() => {
              onRightArrowClick(row.id);
            }}
          >
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
        {this.state.trailer.trailerUrl && (
          <MovieTrailer trailerUrl={this.state.trailer.trailerUrl} />
        )}
      </div>
    );
  }
}

export default Row;
