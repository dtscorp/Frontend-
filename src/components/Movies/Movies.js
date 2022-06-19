// import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { useSelector } from "react-redux";
import StyledMovies from "./Movies.styled";
// import { nanoid } from "nanoid";
function Movies(props) {
  // const movies = data;
  // const { movies } = props;

  const movies = useSelector((store) => store.movies.movies);
  // function tambahFilm() {
  //   const movie = {
  //     id: nanoid,
  //     title: "Raya and the last dragon",
  //     year: "2021",
  //     type: "Movie",
  //     poster: "https://picsum.photos/300/400",
  //   };
  //   setMovie([...movies, movie]);
  // }
  return (
    <StyledMovies>
      <div>
        <section>
          <h2>{props.title}</h2>
          <div className="movie__container">
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </StyledMovies>
  );
}
export default Movies;
