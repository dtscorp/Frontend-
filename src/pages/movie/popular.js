/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function Popular() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);
  const title = "Popular Movies";

  useEffect(async () => {
    getPopularMovies();
  }, []);
  async function getPopularMovies() {
    const response = await axios(url);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} title={title} />
    </>
  );
}
export default Popular;
