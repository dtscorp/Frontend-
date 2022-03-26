import style from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";
function Movies() {
  // const movies = data;

  const [movies, setMovie] = useState(data);

  function tambahFilm() {
    const movie = {
      id: nanoid,
      title: "Raya and the last dragon",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/200/300",
    };
    setMovie([...movies, movie]);
  }
  return (
    <div className={style.container}>
      <section className={style.movies}>
        <h2 className={style.movies__title}>Latest Movies</h2>
        <div className={style.movie__container}>
          {movies.map(function (movie) {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* {mendabahkan event} */}
        <button onClick={tambahFilm}>Add movie</button>
      </section>
    </div>
  );
}
export default Movies;
