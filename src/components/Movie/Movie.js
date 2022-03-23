import style from "./Movie.module.css";
function Movie() {
  return (
    <div className={style.container}>
      <section className={style.movies}>
        <h2 className={style.movies__title}>Latest Movies</h2>
        <div className={style.movie__container}>
          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>

          <div className={style.movie}>
            <img
              className={style.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Movie;
