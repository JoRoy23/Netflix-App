import React, { Component } from "react";
import Row from "./Row";
import Banner from "./Banner";
import axios from "../axios";
import { choice } from "../helpers";
import { basePosterUrl, bannerRequest, rowInformation } from "../config";
import { v4 as uuidv4 } from "uuid";
import defaultBanner from "../images/defaultBanner.jpg";
import "../css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    // State of his children component ("row", "banner")
    this.state = {
      movieRows: this.initializingRows(),
      banner: {},
    };
  }

  async componentDidMount() {
    // Fetching the data for the banner
    const request = await axios.get(bannerRequest.fetchUrl);
    const banner = choice(request.data.results);

    this.setState({ banner });
  }

  handleClickLeftArrow = (rowId) => {
    // Moving posters to the left on left arrow click
    const updatedMovieRow = this.state.movieRows.map((row) => {
      if (rowId === row.id) {
        const xPosition = row.xPosition + Math.floor(window.innerWidth / 2);
        xPosition > 0 ? (row.xPosition = 0) : (row.xPosition = xPosition);
        return row;
      }
      return row;
    });
    this.setState({ movieRows: updatedMovieRow });
  };

  handleClickRightArrow = (rowId) => {
    // Moving posters to the right on right arrow click
    const updatedMovieRow = this.state.movieRows.map((row) => {
      if (rowId === row.id) {
        const xPosition = row.xPosition - Math.floor(window.innerWidth / 2);
        const rowWidth = this.determineRowWidth();

        xPosition < rowWidth
          ? (row.xPosition = rowWidth)
          : (row.xPosition = xPosition);

        return row;
      }
      return row;
    });
    this.setState({ movieRows: updatedMovieRow });
  };

  determineRowWidth() {
    // Determine the width of the row
    if (window.innerWidth >= 768 && window.innerWidth < 1100) {
      const rowWidth = -0.24 * 20 * window.innerWidth - 300 + window.innerWidth;
      return rowWidth;
    } else if (window.innerWidth >= 1100 && window.innerWidth < 1400) {
      const rowWidth = -0.18 * 20 * window.innerWidth - 300 + window.innerWidth;
      return rowWidth;
    } else if (window.innerWidth >= 1400) {
      const rowWidth = -0.15 * 20 * window.innerWidth - 300 + window.innerWidth;
      return rowWidth;
    }
  }

  bannerUrl(backdropPath) {
    // Creating the url for every movie poster
    if (backdropPath) {
      const bannerUrl = `${basePosterUrl}${backdropPath}`;
      return bannerUrl;
    }
    return defaultBanner;
  }

  initializingRows() {
    // Initializing the state of rows when the component is mount
    const movieRows = rowInformation.map((row) => {
      return { ...row, id: uuidv4() };
    });
    return movieRows;
  }

  renderingRows() {
    // Rendering multiple rows for different movie gender
    const row = this.state.movieRows.map((row) => (
      <Row
        key={row.id}
        row={row}
        determineRowWidth={this.determineRowWidth}
        onRightArrowClick={this.handleClickRightArrow}
        onLeftArrowClick={this.handleClickLeftArrow}
      />
    ));
    return row;
  }

  render() {
    return (
      <div className="home">
        <React.Fragment>
          <Banner
            movieDescription={this.state.banner.overview}
            backdropPath={this.bannerUrl(this.state.banner.backdrop_path)}
            title={
              this.state.banner.title ||
              this.state.banner.name ||
              this.state.banner.original_name
            }
          />
          {this.renderingRows()}
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
