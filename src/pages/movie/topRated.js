/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRated() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
  const [movies, setMovies] = useState([]);
  const title = "Top Rated ";

  useEffect(async () => {
    getTopRatedMovies();
  }, []);
  async function getTopRatedMovies() {
    const response = await axios(url);
    setMovies(response.data.results);
  }
  console.log(movies);
  return (
    <>
      <Hero />
      <Movies movies={movies} title={title} />
    </>
  );
}
export default TopRated;
