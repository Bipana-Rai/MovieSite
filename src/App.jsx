// import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MultipleGrid from './components/MultipleGrid'
import Footer from './components/Footer'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Detail from './Pages/Detail'
import UserLayout from './layout/userLayout'
import SearchResult from './components/SearchResult'
import MoviesList from './components/MoviesList'
import TvShows from './components/TvShows'


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/explore/movies' element={<MoviesList/>}></Route>
          <Route path='/explore/tv' element={<TvShows/>}></Route>
          <Route path='/search/:query' element={<SearchResult/>}></Route>
          <Route path='/:media/:id' element={<Detail />}></Route>
        </Route>
        <Route path='/login' element={<div>login</div>}></Route>
      </Routes>
     
    </>
  )
}

export default App