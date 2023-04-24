import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {AddToDO,DeleteToDO} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';

function Todo(props) {
    const[inpData,setinpData]=useState('')
    const list = useSelector((state)=>state.listdata.list);
    console.log(list);
    // list.map((ele)=>{console.log(ele);})
    const dispatch = useDispatch();


    return (
        <>
         <div className="container">
             {/* <div className="row mt-5"> */}
        <input type="text"  onChange={(event)=>{setinpData(event.target.value)}} value={inpData}/>
            <Button variant="primary" onClick={()=>{dispatch(AddToDO(inpData),setinpData(''))}}>Add todo</Button>

            {list.map((elem,i)=>{
                        return(
                           
                          
                                // <div className="col-3" key={elem.id}>
                                    <>
                                   {/* <input type="text"  className='form-control' value={elem.data}/> */}
                                   <h1 key={i}>{elem.data}</h1>
                                   <button className='btn btn-primary' onClick={()=>{dispatch(DeleteToDO(elem.id))}}>Delete</button>
                                   </>
                                // </div>
                               
                           
                        )
                    })
                }
                 </div>
                            {/* </div> */}
        
           
        </>
    );
}

export default Todo;