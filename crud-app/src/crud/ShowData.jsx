import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {GetApiAction,DeleteApiAction} from './Actions/index';
import { Link, useNavigate } from "react-router-dom";

function ShowData(props) {
  const dispatch = useDispatch();
  const responsedata = useSelector((state)=>state.reducer.details);
  const isDELETEResponse = useSelector((state)=>state.reducer.isDELETEResponse)
  console.log(responsedata);

  useEffect(()=>{
    dispatch(GetApiAction())
  },[dispatch])

  const navigate = useNavigate();

  // function handleclick() {
  //   navigate("/editdata");
  // }

  if(isDELETEResponse)
  {
    // alert("your data has been deleted!");
    window.location.reload(false);
  }
  
const result = responsedata?responsedata.map((data)=>{
  return <>
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.Phone}</td>
    <td>{data.Country}</td>
    <td><button className='btn btn-success' onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button>/
    <Link to={`/Update/${data.id}`}>
                <button className='btn btn-warning'>Edit</button>
              </Link>
    </td>
  </tr>
  </>
}):null;
   
   
  
    return (
     
      
      <>
      <div className="container">
        <h1 className='text-center text-danger'>Welcome to API CRUD App</h1>
        <div className="row mt-5">
            <div className="col">
                <table className='table'>
              
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Action</th>
                 
                    <tbody>

                      {result}
                      </tbody>
                </table>
            </div>
        </div>
      </div>
      </>
    );
}

export default ShowData;