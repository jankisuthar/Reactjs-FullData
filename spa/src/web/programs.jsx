import React, { useState } from 'react';
import ProgramAPI from './API/api'

function Programs(props) {
    const[programdata,setprogramdata] = useState(ProgramAPI)
    console.log(programdata);
    return (
        <div>
        <section className='mt-5'>
           <div className="container program-work">
            <div className="row">
                {programdata.map((ele,i)=>{
                    const{id,logo,title,info}=ele;

                    return(
                        <>
                        <div className="col-4 text-center mt-5" key={i}>
                            <i className={`font-icon ${logo}`}></i>
                            <h2 className='mt-3'>{title}</h2>
                            <p className='mt-3'>{info}</p>
                            </div>
                        </>
                    )
                })}
                
            </div>
           </div>
        </section>
        </div>
    );
}

export default Programs;