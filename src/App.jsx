import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { featchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";

import { getApiConfiguration } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home); 

  useEffect(() => {
    featchApiConfig();
  }, []);

  const featchApiConfig = async () => {
    try {
      await featchDataFromApi("/configuration").then((res) => {
        // console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    <ScrollToTop/>
    </BrowserRouter>
  );
}

export default App;
