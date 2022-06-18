/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINT from "../../utils/constants/endpoint";
import Button from "../UI/button";
import StyledHero from "./Hore.style";

function Hero() {
  const [movie, SetMovie] = useState("");
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;
  // async function Fetch() {
  //   const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   SetMovie(data);
  // }
  async function getTrendingMovies() {
    // const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(ENDPOINT.TRENDING);
    return response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ];
  }
  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;
    // const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(ENDPOINT.HERO(id));
    SetMovie(response.data);
  }
  useEffect(getDetailMovie, []);
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button
            variant="primary"
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            md
            target="_blank"
          >
            Watch Movie
          </Button>
        </div>
        <div className="hero__right">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      </section>
    </StyledHero>
  );
}
export default Hero;
