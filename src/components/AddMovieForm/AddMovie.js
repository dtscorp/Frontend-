import style from "./AddMovie.module.css";
function AddMovie() {
  return (
    <div className={style.container}>
      <section className={style.addmovie}>
        <div className={style.addmovie__left}>
          <img
            className={style.addmovie__image}
            src="https://picsum.photos/563/354"
            alt=""
          />
        </div>
        <div className={style.addmovie__right}>
          <h3 className={style.addmovie__title}>Add Movie</h3>
          <form className={style.addmovie__form} action="">
            <label className={style.addmovie__label}>Title</label>
            <input className={style.addmovie__input} type="text" name="title" />
            <label className={style.addmovie__label}>Year</label>
            <input className={style.addmovie__input} type="text" name="year" />
            <button className={style.addmovie__button} type="button">
              submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovie;
