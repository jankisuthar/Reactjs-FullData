import React from 'react';

function Header(props) {
    return (
      <>
      <header className='main-header mt-5'>
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-6 mt-5">
                    <h1 className='header-text'>Tops Technologies Provides<br/>
                    Multiple courses</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore iure cumque non vero asperiores error, animi, aspernatur quasi iusto sunt excepturi, ut aut repellendus harum incidunt sequi! Dicta, numquam eos.</p>
                    <div className="search d-flex ">
                        <input type="text" name="search" className='form-control rounded-pill myinput w-20'/>
                        <button className='btn btn-primary rounded-pill search-btn'>Search</button>
                    </div>
                </div>
                <div className="col-6 main-img d-flex justify-content-center align-items-center mt-5">
                        <img src="img/cntnt-img.jpg" alt="content"  className='img-fluid'/>
                        <img src="img/mobile.jpg" alt="mobile"  className='side-img img-fluid'/>
                </div>
            </div>
        </div>
      </header>
      </>
    );
}

export default Header;