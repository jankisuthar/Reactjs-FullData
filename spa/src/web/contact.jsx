import React from 'react';
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";

  import About from './About';


function Contact(props) {
 
   
    return (
      <>
      <section className='contact-section mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div className="card">
                        <div className="card-title">
                            <h3 className='text-center'>Contact Us</h3>
                        </div>
                        <div className="card-body">
                        <form >
                            <div class="mb-3 mt-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
        

                   
                          {/* <Router> */}
                            <button type="submit" class="btn btn-primary">Submit</button>
                           <Link to="/about">about</Link>
                           
                                                      

                            <Routes>
                         
                                <Route path='/about' element={<About/>}/>
                              
                            </Routes>
                            {/* </Router> */}
                </form>
                        </div>
                    </div>
                  
                
                </div>
                <div className="col-5 d-flex justify-content-center align-items-center">
                    <img src="img/cntact.jpg" alt="contact"  className='img-fluid'/>
                </div>
            </div>
        </div>
      </section>

      <footer className='p-3 bg-dark text-white text-center mt-5'>
        <h4>CopyRight@2023 By Tops Technologies</h4>
      </footer>
      </>
    );
}

export default Contact;