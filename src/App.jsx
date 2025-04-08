
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Detail from './Pages/Detail'
import UserLayout from './layout/userLayout'
import SearchResult from './components/SearchResult'
import MoviesList from './components/MovieOrTV'



const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/explore/:query' element={<MoviesList/>}></Route>
          {/* <Route path='/explore/tv' element={<TvShows/>}></Route> */}
          <Route path='/search/:query' element={<SearchResult/>}></Route>
          <Route path='/:media/:id' element={<Detail />}></Route>
        </Route>
      </Routes>
     
    </>
  )
}

export default App