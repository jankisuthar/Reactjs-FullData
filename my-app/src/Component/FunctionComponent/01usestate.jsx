import React, { useState } from 'react';

function Usestate(props) {
    const[varname,setnamevar]=useState("Tops TEchnologies")
    const[vara,setvara]=useState(0);
    const[varb,setvarb]=useState(0);
    const BtnClck=()=>{
        console.log("btn called");
        setnamevar("Reactjs Class")
        setvara(10)
        setvarb(20)
    }
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                   {varname}
                   <button className='btn btn-success' onClick={BtnClck}>Click me</button>
                   <br />
                   {vara + varb}
                   <button className='btn btn-primary' onClick={()=>{setvara(10); setvarb(20) }}>Click Me</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Usestate;