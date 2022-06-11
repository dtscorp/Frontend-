import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { useSelector } from "react-redux";
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
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{props.title}</h2>
          <div className={styles.movie__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Movies;
