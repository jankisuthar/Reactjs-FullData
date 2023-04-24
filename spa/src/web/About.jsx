import React from 'react';

function About(props) {
    return (
     <>
        <section className='about-section mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-4 d-flex text-center justify-content-center align-items-center">
                        <img src="img/cntnt-img.jpg" alt="about" className='img-fluid' />
                    </div>
                    <div className="col-8 text-center my-auto">
                        <h1>IT Training in ahmedabad</h1>
                        <h3 className='mt-3'>Best Computer classes fot IT Training in Software,Hardware and Designing.</h3>
                        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cum ipsam hic pariatur repellat accusamus iusto nulla eaque iste sapiente corrupti voluptatibus molestiae, reiciendis delectus temporibus earum, soluta quisquam ducimus?</p>
                        <button className='btn btn-primary'>Download Curriculam</button>
                        <button className='btn btn-outline-primary ms-2'>Reqest a Demo Call</button>
                    </div>
                </div>
            </div>
        </section>
     </>
    );
}

export default About;