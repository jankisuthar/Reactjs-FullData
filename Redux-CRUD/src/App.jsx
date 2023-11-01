import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {

  Routes,
  Route,

} from "react-router-dom";
import ShowData from './CRUD/ShowData'
import Home from './CRUD/Home'
import Update from './CRUD/update'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<ShowData/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </>
  )
}

export default App
