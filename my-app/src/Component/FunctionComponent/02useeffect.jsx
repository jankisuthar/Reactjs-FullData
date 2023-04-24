import React, { useEffect, useLayoutEffect, useState } from 'react';

function Useeffect(props) {
    let a = 50;
    let b = 50;

    const[vara,setvara]=useState(0)
    const[varb,setvarb]=useState(50)
    const[varc,setvarc]=useState("Tops")

    useEffect(()=>{
        console.log("useEffect called");
        return BtnClck
    })

    // useLayoutEffect(()=>{
    //   setTimeout(() => {
    //     console.log("useLayoutEffect called");
    //   }, 2000);
    // })

   

    const BtnClck=()=>{
    setTimeout(() => {
        setvara(50)
        setvarc("How are you?")
    }, 2000);
    
    }
    return (
        <div>
           <div className="container">
            <div className="row">
                <div className="col">
                    {varc}
                    <br />
                    {a+b}
                    <br />
                    {vara}
                    <br />
                    <button className='btn btn-primary' onClick={BtnClck}>Click Me</button>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Useeffect;