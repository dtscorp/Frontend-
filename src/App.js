import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/create";
import Home from "./pages/home";
import Popular from "./pages/movie/popular";
import NowPlaying from "./pages/movie/nowPlaying";
import TopRated from "./pages/movie/topRated";
import Layout from "./layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRated />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
