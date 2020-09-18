import React, { Component } from "react";
import Youtube from "react-youtube";
import "../css/MovieTrailer.css";

// Stateless Component
class MovieTrailer extends Component {
  determineTrailerHeight() {
    if (window.innerWidth >= 768) {
      return "350px";
    }
    return "170px";
  }

  render() {
    // Config for the movies trailer
    const opts = {
      height: this.determineTrailerHeight(),
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="movieTrailer">
        <Youtube videoId={this.props.trailerUrl} opts={opts} />
      </div>
    );
  }
}

export default MovieTrailer;
