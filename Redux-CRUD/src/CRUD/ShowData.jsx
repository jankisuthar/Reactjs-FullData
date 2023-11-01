import React, { useEffect } from 'react';
import {GetApiAction,DeleteApiAction} from '../Actions/index'
import { useSelector,useDispatch } from 'react-redux';
import {
    Link,
    
   } from "react-router-dom"

function ShowData(props) {
    const dispatch = useDispatch()
    const responsedata = useSelector((state)=>state.reducer.details)
    const deletedata = useSelector((state)=>state.reducer.isDELETERespone)
    console.log(deletedata);

    useEffect(()=>{
        dispatch(GetApiAction())
    },[dispatch])

    if(deletedata)
    {
        // alert("data deleted");
        window.location.reload(false);
    }

    const result = responsedata?responsedata.map((data)=>{
        return <>
                <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.country}</td>
                                        <td><button className='btn btn-danger' onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button></td>
                                        <td><Link to={`update/${data.id}`}><button type='button' className='btn btn-success'>Update</button></Link></td>

                                    </tr>
            </>
    }):null;
    return (
       <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <table className='table'>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                            </thead>

                           
                            
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