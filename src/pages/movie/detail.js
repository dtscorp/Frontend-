/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detail";
import Movies from "../../components/Movies/Movies.js";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINT from "../../utils/constants/endpoint";
function Detail() {
  const { id } = useParams();
  // const [movies, setMovies] = useState([]);
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const title = "Recommendations";
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    // const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
    // const response = await axios(URL);
    const response = await axios(ENDPOINT.RECOMMENDATION(id));
    // setMovies(response.data.results);
    dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title={title} />
    </>
  );
}
export default Detail;
