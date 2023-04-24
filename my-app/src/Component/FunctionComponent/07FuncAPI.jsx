import React from 'react';
import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function FuncAPI(props) {
    const[data,setdata]=useState({})
    const[loader,setloader]=useState("loading...")

    useLayoutEffect(()=>{
        setTimeout(() => {
            setloader("data found")
        }, 3000);
    })

    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(res=>res.json())
            .then((Response)=>{
                console.log(Response);
                setdata(Response)
            }).catch((Error)=>{
                console.log(Error);
            })
        }, 3000);
    })
 
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        {loader}
                        {Object.entries(data).map((res,i)=>{
                            return <>
                                 <li key={i}>{res[1].id }</li>
                                 <li key={i}>{res[1].name }</li>
                                 <li key={i}>{res[1].email }</li>
                                 <li key={i}>{res[1].body }</li>
                                 </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FuncAPI;