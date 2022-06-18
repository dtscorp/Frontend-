import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/create";
import Home from "./pages/home";
import Popular from "./pages/movie/popular";
import NowPlaying from "./pages/movie/nowPlaying";
import TopRated from "./pages/movie/topRated";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/detail";
// import { useState } from "react";
// import data from "./utils/constants/data";

function App() {
  // const [movies, setMovie] = useState(data);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRated />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
