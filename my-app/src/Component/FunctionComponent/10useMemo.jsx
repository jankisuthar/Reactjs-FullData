import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

function UseMemo(props) {
    const[count,setcount] = useState(0)
  
    const increment=()=>{
        setcount((c)=>c+1);
        console.log("called");
    }

   
    const calc = useMemo(()=>MyCalculation(count));
    return (
        <div>
           <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <h1>{count}</h1>
                    <button className='btn btn-success' onClick={increment}>Increment</button>
                    {calc}
                </div>
            </div>
           </div>
        </div>
    );

    
}
const MyCalculation=(num)=>{
    console.log("caluclate done");
    for(let i = 0;i<100000;i++)
    {
        num +=1;
    }
    return num;
    
}

export default UseMemo;