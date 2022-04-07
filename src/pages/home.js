import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovieForm/AddMovie";
import { useState } from "react";
import data from "../utils/constants/data";
function Home() {
  const [movies, setMovie] = useState(data);
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies movies={movies} setMovie={setMovie} />
      <AddMovie movies={movies} setMovie={setMovie} />
      <Footer />
    </div>
  );
}

export default Home;
