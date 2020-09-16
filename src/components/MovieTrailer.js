import React, { Component } from "react";
import Youtube from "react-youtube";

// Stateless Component
class MovieTrailer extends Component {
  render() {
    // Config for the movies trailer
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return <Youtube videoId={this.props.trailerUrl} opts={opts} />;
  }
}

export default MovieTrailer;
