import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movie from "../components/Movie/Movie";
import AddMovie from "../components/AddMovieForm/AddMovie";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movie />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default Home;
