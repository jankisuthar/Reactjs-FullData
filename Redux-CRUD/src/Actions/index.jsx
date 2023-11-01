import { useEffect, useState } from 'react';
import {GetApiDetails,PostApiDetails,DeleteApiDetails,UpdateApiDetails,UpdateApiDetailsn} from '../API/AxiosRequest';

export const GetApiAction=()=>{
    return function(dispatch)
    {
        return GetApiDetails().then((res)=>{
            dispatch({
                type:"GET_DETAILS",
                payload:res.data,
            })
        })
    }
}

export const PostApiAction=(request)=>{
    return function(dispatch)
    {
        return PostApiDetails(request).then((res)=>{
            dispatch({
                type:"POST_DETAILS",
                payload:'',
            })
        })
    }
}

export const DeleteApiAction=(id)=>{
    return function(dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            console.log("delete respone.....",res);
            dispatch({
                type:"DELETE_DETAILS",
                payload:res.data,
            })
        })
    }
}

//Edit
export default(props)=>{
    const[detailbyid,setdetailsbyid]=useState({});
    const GetetailsId=(requestid)=>{
        return UpdateApiDetails(requestid).then((res)=>{
            console.log("perticular id data...",res);
            setdetailsbyid(res);
        })
    }
    useEffect(()=>{
        GetetailsId(props);
   },[])
   return [detailbyid];
}

//update
export const UpdateApiAction = (request, id) => {
    return function (dispatch) {
      dispatch({
        type: "UPDATE_DETIALS",
        payload: false,
      });
  
      return UpdateApiDetailsn(request, id).then((res) => {
        console.log("responce post called....", res);
        dispatch({
          type: "UPDATE_DETIALS",
          payload: true,
        });
      });
    };
  };