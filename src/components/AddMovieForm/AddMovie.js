import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovie.module.css";
import Alert from "../Alert/Alert";
function AddMovie(props) {
  // destructing props
  const { movies, setMovie } = props;
  // membuat state title and date
  const [title, setTitle] = useState("");

  const [date, setDate] = useState("");

  const [type, setType] = useState("");

  const [poster, setPoster] = useState("");
  // membuat state untuk menghandle validasi
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  // membuat function Handletitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleType(e) {
    setType(e.target.value);
  }
  function handlePoster(e) {
    setPoster(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    } else if (type === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(true);
    } else if (poster === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
      setIsPosterError(true);
    } else {
      const movie = {
        id: nanoid,
        title: title,
        year: date,
        type: type,
        poster: poster,
      };
      console.log(movie);
      setMovie([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
    }
  }
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                onChange={handleTitle}
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                value={title}
              />
              {/* conditional rendering */}
              {isTitleError && <Alert>The Title is Required</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                onChange={handleDate}
                id="date"
                className={styles.form__input}
                type="number"
                name="date"
                value={date}
              />
              {/* conditional rendering */}
              {isDateError && <Alert>The Date is required</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
              <select
                value={type}
                onChange={handleType}
                className={styles.form__input}
              >
                <option value="">Choose Type</option>
                <option value="series">Series</option>
                <option value="movie">Movie</option>
                <option value="sinetron">Sinetron</option>
              </select>
              {/* conditional rendering */}
              {isTypeError && <Alert>The Type is required</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Poster
              </label>
              <input
                onChange={handlePoster}
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                value={poster}
              />
              {/* conditional rendering */}
              {isPosterError && <Alert>The Poster is required</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovie;
