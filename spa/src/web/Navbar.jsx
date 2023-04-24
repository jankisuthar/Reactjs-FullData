import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './Header'
  import Program from './programs'
  import About from './About'
  import Contact from './contact'
 

function Navbar(props) {
    const Menu = {'/home':'Home','/programs':'Program','/about':'About','/contact':'Contact'}
    const data = Object.entries(Menu).map((res,i)=>{
        return <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
        <div>
            <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href=""><img src="img/logo.png" alt="logo" className='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        
        {data}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/programs' element={<Program/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
</Routes>
</Router>
        </div>
    );
}

export default Navbar;