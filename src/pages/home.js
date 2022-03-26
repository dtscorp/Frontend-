import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovie from "../components/AddMovieForm/AddMovie";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default Home;
