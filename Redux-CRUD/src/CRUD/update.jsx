import React from 'react';
import { useState } from 'react';
import {PostApiAction,UpdateApiAction } from '../Actions/index'
import { useDispatch } from 'react-redux';
import GetetailsId from '../Actions/index'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import { GetApiDetails } from '../API/AxiosRequest';

function Update(props) {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[country,setCountry]=useState('')

    const {id}=useParams();

    const[getdetails]=GetetailsId(id)

    useEffect(()=>{
        const data=()=>{
           console.log(getdetails.data);
            if(getdetails.data){
               setName(getdetails.data.name) ;
               setEmail(getdetails.data.email) ;
               setPhone(getdetails.data.phone) ;
               setCountry(getdetails.data.country) ;
               
            }
        }
        data();
    },[getdetails.data])

    
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
        dispatch(UpdateApiAction(finaldata,id))
    }
    return (
       <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
              
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={NameHndlr} name='name' defaultValue={name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={EmailHndlr} name='email' defaultValue={email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" onChange={PhoneHndlr} name='phone' defaultValue={phone}/>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={CountryHndlr} name='country' defaultValue={country}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={(e)=>ClickHndl(e)}>Submit</button>
                
                </div>
            </div>
        </div>
       </>
    );
}

export default Update;