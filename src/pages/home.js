import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import AddMovie from "../components/AddMovieForm/AddMovie";
// import { useState } from "react";
// import data from "../utils/constants/data";
function Home() {
  // const [movies, setMovie] = useState(data);
  // dispatch(updateMovie(movies));
  return (
    <div>
      <Hero />
      <Movies title="Latest Movies" />
      {/* <AddMovie movies={movies} setMovie={setMovie} /> */}
    </div>
  );
}

export default Home;
