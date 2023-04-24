import logo from './logo.svg';
import './App.css';
import Home from './crud/Home'
import Editdata from './crud/editdata'
import Show from './crud/ShowData'
import {  Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Show/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/Update/:id' element={<Editdata/>}></Route>
    </Routes>
    </>
  );
}

export default App;
