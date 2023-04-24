import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {PostApiAction} from './Actions/index';

function Home(props) {
    
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[Phone,setphone]=useState('');
    const[Country,setcountry]=useState('');

    const dispatch = useDispatch(); 

    const nameHndler=(e)=>{
        setname(e.target.value)
        
    }
    const emailHndler=(e)=>{
        setemail(e.target.value)
       
    }
    const phoneHndler=(e)=>{
        setphone(e.target.value)
       
    }
    const countryHndler=(e)=>{
        setcountry(e.target.value)
       
    }

    const ClickHandler=(e)=>{
        const finaldata={
        name:name,
        email:email,
        Phone:Phone,
        Country:Country,
    }
    dispatch(PostApiAction(finaldata));
    }
    return (
       <div className="container">
        
    
        <div className="mb-3 mt-3">
                <label for="email" className="form-label">Name:</label>
                <input type="email" className="form-control" id="name"  name="name" onChange={(e)=>{nameHndler(e)}}/>
            </div>
            <div className="mb-3 mt-3">
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email"  name="email"
                onChange={(e)=>{emailHndler(e)}}/>
            </div>
            <div className="mb-3">
                <label for="phone" className="form-label">Phone:</label>
                <input type="text" className="form-control" id="phone"  name="phone"
                onChange={(e)=>{phoneHndler(e)}}/>
            </div>
            <div className="mb-3">
                <label for="country" className="form-label">Country:</label>
                <input type="text" className="form-control" id="country"  name="country"
                onChange={(e)=>{countryHndler(e)}}/>
            </div>
  
            <button type="button" className="btn btn-primary" onClick={(e)=>ClickHandler(e)}>Submit</button>

       </div>
    );
}

export default Home;