/* eslint-disable react-hooks/exhaustive-deps */
import Style from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {
  const [movie, SetMovie] = useState("");

  async function Fetch() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();
    SetMovie(data);
  }
  useEffect(Fetch, []);
  console.log(movie);
  return (
    <div className={Style.container}>
      <section className={Style.hero}>
        <div className={Style.hero__left}>
          <h2 className={Style.hero__title}>{movie.Title}</h2>
          <h3 className={Style.hero__genre}>Genre:{movie.Genre}</h3>
          <p className={Style.hero__description}>{movie.Plot}</p>
        </div>
        <div className={Style.hero__right}>
          <img
            className={Style.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}
export default Hero;
