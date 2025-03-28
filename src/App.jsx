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


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/movie/:id' element={<Detail />}></Route>
        </Route>
        <Route path='/login' element={<div>login</div>}></Route>
      </Routes>
     
    </>
  )
}

export default App