import { Link } from "react-router-dom";
import StyledMovie from "./Movie.Style";

function Movie(props) {
  const { movie } = props;
  const year = movie.year || movie.release_date;
  return (
    <StyledMovie>
      <img
        src={
          movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
        }
        alt={movie.title}
      />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>

      <p>{year.substr(0, 4)}</p>
    </StyledMovie>
  );
}
export default Movie;
