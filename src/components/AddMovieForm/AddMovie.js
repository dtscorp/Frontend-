import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovie.module.css";
import Alert from "../Alert/Alert";
function AddMovie(props) {
  // // destructing props
  const { movies, setMovie } = props;
  // // membuat state title and date
  // const [title, setTitle] = useState("");

  // const [date, setDate] = useState("");

  // const [type, setType] = useState("");

  // const [poster, setPoster] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "",
    poster: "",
  });

  // membuat function Handletitle
  // function handleTitle(e) {
  //   setTitle(e.target.value);
  // }
  // function handleDate(e) {
  //   setDate(e.target.value);
  // }
  // function handleType(e) {
  //   setType(e.target.value);
  // }
  // function handlePoster(e) {
  //   setPoster(e.target.value);
  // }
  // membuat function handle keseluruhan
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  // membuat state untuk menghandle validasi
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const { title, date, type, poster } = formData;
  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
      return false;
    } else if (type === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(true);
      return false;
    } else if (poster === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
      setIsPosterError(true);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
      setIsPosterError(false);
      return true;
    }
  }
  function addMovie() {
    const movie = {
      id: nanoid,
      title: title,
      year: date,
      type: type,
      poster: poster,
    };
    console.log(movie);
    setMovie([...movies, movie]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                className={styles.form__input}
                name="type"
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
                onChange={handleChange}
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
