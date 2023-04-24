import React from 'react';
import { useEffect } from 'react';

function About(props) {
    useEffect(()=>{
        setTimeout(()=>{
        return(
            document.getElementById('demo').innerHTML="This is demo data"
             )
    },1000)
})
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                   <h1 id='demo'></h1>
                </div>
            </div>
        </div>
    );
}

export default About;