import React from 'react';
import Home from './Home'
import About from './about'
import Loop from './02loops'
import State from './03State'
import Compo from './04Compo'
import RevCompo from './06compo-revision' 
import StateRevision from './07state-revision'
import LifeCycle from './08lifecycle'
import FetchAPI from './09FetchAPI'
import Click from './10click'
import UseState from './FunctionComponent/01usestate'
import UseEffect from './FunctionComponent/02useeffect';
import UseRef from './FunctionComponent/03useref.jsx';
import UseReducer from './FunctionComponent/04usereducer'
import UseContext from './FunctionComponent/06UseContext'
import FuncAPI from './FunctionComponent/07FuncAPI'
import USeDebug from './FunctionComponent/08UseDebugValue'
import Imparative from './FunctionComponent/09Imparative'
import UseMemo from './FunctionComponent/10useMemo'
import {
    BrowserRouter as Router,
    RouterProvider,
    Route,
    Routes,
    Link,
  } from "react-router-dom";

function headerrevison(props) {
    const data = {'/home':'Home','/about':'About','/loops':'Loop','/state':'State',
                  '/compo':'Compo','/RevCompo':'RevCompo','/StateRevision':'StateRevision',
                '/lifecycle':'LifeCycle','/fetchapi':'FetchAPI','/click':'Click',
              '/usestate':'UseState','/useeffect':'UseEffect','/useref':'UseRef',
            '/usereducer':'UseReducer','/usecontext':'UseContext','/funcapi':'FuncAPI',
          '/usedebug':'USeDebug','/imparative':'Imparative','/usememo':'UseMemo'}
    const alldata = Object.entries(data).map((res,i)=>{
        return  <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>{res[1]}</Link>
      </li>
    })
    return (
       <>
       <Router>
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       {alldata}
       
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/loops' element={<Loop/>}/>
    <Route path='/state' element={<State/>}/>
    <Route path='/compo' element={<Compo/>}/>
    <Route path='/RevCompo' element={<RevCompo/>}/>
    <Route path='/StateRevision' element={<StateRevision/>}/>
    <Route path='/lifecycle' element={<LifeCycle/>}/>
    <Route path='/fetchapi' element={<FetchAPI/>}/>
    <Route path='/click' element={<Click/>}/>
    <Route path='/usestate' element={<UseState/>}/>
    <Route path='/useeffect' element={<UseEffect/>}/>
    <Route path='/useref' element={<UseRef/>}/>
    <Route path='/usereducer' element={<UseReducer/>}/>
    <Route path='/usecontext' element={<UseContext/>}/>
    <Route path='/funcapi' element={<FuncAPI/>}/>
    <Route path='/usedebug' element={<USeDebug/>}/>
    <Route path='/imparative' element={<Imparative/>}/>
    <Route path='/usememo' element={<UseMemo/>}/>
</Routes>

<div className="dashboard">
  <Routes>
          <Route path='/imparative' element={<Imparative/>}/>
          <Route path='/usememo' element={<UseMemo/>}/>
          
        </Routes>
</div>
</Router>
       </>
    );
}

export default headerrevison;