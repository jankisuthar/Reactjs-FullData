import React, { Component } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

class Btnclick extends Component {
    constructor(props)
    {
        super(props);
        console.log("Constructor called");
    }
    render() {
        return (
            <div>
               <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        {/* <button className='btn btn-primary' onClick={()=>{
                            console.log("Btn called");
                            Navigate('/API');
                        }}>Click Me</button> */}

                        <button className='btn btn-primary' onClick={Click}>Click Me</button>
                    </div>
                </div>
               </div>
            </div>
        );
    }
}

export default Click;

function Click()
{
  let navigate = useNavigate('/about');
  return <>
    <Btnclick onClick={navigate}/>
  </>
}