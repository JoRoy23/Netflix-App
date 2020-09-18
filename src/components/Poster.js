import React, { Component } from "react";
import "../css/Poster.css";

// Stateless Component
class Poster extends Component {
  render() {
    const { title, isPosterLarge, bannerUrl, onMovieClick } = this.props;
    return (
      <img
        className={isPosterLarge ? "poster__large" : "poster"}
        src={bannerUrl}
        alt={title}
        onClick={() => {
          onMovieClick(title);
        }}
      />
    );
  }
}

export default Poster;
