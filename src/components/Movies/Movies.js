import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";
import StyledMovies from "./Movies.styled";
function Movies(props) {
  // const movies = data;
  const { movies, setMovie } = props;

  function tambahFilm() {
    const movie = {
      id: nanoid,
      title: "Raya and the last dragon",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovie([...movies, movie]);
  }
  return (
    <StyledMovies>
      <section>
        <h2>{props.title}</h2>
        <div className="movie__container">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </StyledMovies>
  );
}
export default Movies;
