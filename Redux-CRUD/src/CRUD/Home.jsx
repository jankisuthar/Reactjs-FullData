import React from 'react';
import { useState } from 'react';
import {PostApiAction} from '../Actions/index'
import { useDispatch } from 'react-redux';

function Home(props) {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[country,setCountry]=useState('')

    const NameHndlr=(e)=>{
        setName(e.target.value);
    }
    const EmailHndlr=(e)=>{
        setEmail(e.target.value);
    }
    const PhoneHndlr=(e)=>{
        setPhone(e.target.value);
    }
    const CountryHndlr=(e)=>{
        setCountry(e.target.value);
    }

    const dispatch = useDispatch();

    const ClickHndl=(e)=>{
        const finaldata={
            name:name,
            email:email,
            phone:phone,
            country:country
        } 
        dispatch(PostApiAction(finaldata))
    }
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
              
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={NameHndlr} name='name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={EmailHndlr} name='email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={PhoneHndlr} name='phone'/>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={CountryHndlr} name='country'/>
                </div>
                <button type="button" className="btn btn-primary" onClick={(e)=>ClickHndl(e)}>Submit</button>
                
                </div>
            </div>
        </div>
       </>
    );
}

export default Home;