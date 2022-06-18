import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovie from "../components/AddMovieForm/AddMovie";
// import { useState } from "react";
// import data from "../utils/constants/data";
function Home({ movies }) {
  // const [movies, setMovie] = useState(data);
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Latest Movies" />
      {/* <AddMovie movies={movies} setMovie={setMovie} /> */}
    </div>
  );
}

export default Home;
