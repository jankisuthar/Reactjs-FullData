import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap5/src/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home';
import About from './Component/about';
// import Header from './Component/01header'
import Navbar from './Component/01header-revison'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <h1>Welcome to React</h1>
    <p>This is para</p> */}
    {/* <Header/> */}
    {/* <Home/>
    <About/> */}
    <Navbar/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
