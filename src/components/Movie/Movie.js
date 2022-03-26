import style from "./Movie.module.css";
function Movie(props) {
  console.log(props.movie);
  const { movie } = props;
  return (
    <div className={style.movie}>
      <img className={style.movie__image} src={movie.poster} alt="" />
      <h3 className={style.movie__title}>{movie.title}</h3>
      <p className={style.movie__date}>{movie.year}</p>
    </div>
  );
}
export default Movie;
