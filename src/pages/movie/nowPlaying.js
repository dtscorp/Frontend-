/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoint";
function NowPlaying() {
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`;
  // const [movies, setMovies] = useState([]);
  const title = "Now Playing ";
  const dispatch = useDispatch();

  useEffect(async () => {
    getNowPlayingMovies();
  }, []);
  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINT.PLAYING);
    // setMovies(response.data.results);
    dispatch(updateMovie(response.data.results));
  }
  return (
    <>
      <Hero />
      <Movies title={title} />
    </>
  );
}
export default NowPlaying;
