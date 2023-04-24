import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {incNumber,decNumber,Reset} from '../Actions/index'

function CounterApp(props) {
    const mystate = useSelector((state)=>state.ChangeNumber)
    const dispatch=useDispatch();
    return (
       <>
        <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <button className='btn btn-primary' onClick={()=>dispatch(decNumber())}>Decrement</button>
                    <input type="text" value={mystate} />
                    <button className='btn btn-primary' onClick={()=>dispatch(incNumber())}>Increment</button>
                    <br />
                    <button className='btn btn-danger' onClick={()=>{
                        console.log("btn called");
                        dispatch(Reset())
                    }}>Reset</button>
                </div>
            </div>
        </div>
       </>
    );
}

export default CounterApp;