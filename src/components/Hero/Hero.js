/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../UI/button";
import StyledHero from "./Hore.style";

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
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>Genre:{movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="primary">Watch Movie</Button>
        </div>
        <div className="hero__right">
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </section>
    </StyledHero>
  );
}
export default Hero;
