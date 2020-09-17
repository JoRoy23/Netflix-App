// API key for The Movie Database API (tmdb website)
const API_KEY = "00ebde2ae23c598267bb97b26be6b43a";

// Base url for every movie poster image
const basePosterUrl = "https://image.tmdb.org/t/p/original/";

// Rest of the url for the banner request
const bannerRequest = {
  fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

// Informations regarding each row
const rowInformation = [
  {
    title: "Trending Now",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLargeRow: false,
    xPosition: 0,
  },
  {
    title: "Top Rated",
    fetchUrl: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    isLargeRow: false,
    xPosition: 0,
  },
  {
    title: "Netflix Original",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLargeRow: true,
    xPosition: 0,
  },
  {
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    isLargeRow: false,
    xPosition: 0,
  },
  {
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    isLargeRow: false,
    xPosition: 0,
  },
  {
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    isLargeRow: false,
    xPosition: 0,
  },
  {
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    isLargeRow: false,
    xPosition: 0,
  },
];

export { rowInformation, bannerRequest, basePosterUrl };
