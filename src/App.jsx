import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Detail from "./Pages/Detail";
import UserLayout from "./layout/userLayout";
import SearchResult from "./components/SearchResult";
import MovieOrTV from "./components/MovieOrTV";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/explore/:query" element={<MovieOrTV/>}></Route>
          <Route path="/search/:query" element={<SearchResult />}></Route>
          <Route path="/:media/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
