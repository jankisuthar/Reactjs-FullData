// import {GET_DETAILS} from "./type"
import { useState,useEffect } from "react"
import {GetApiDetails,
    DeleteApiDetails,
    PostApiDetails,
    GetApiIDDetails,
} from "../../API/axioRequest"


//get all data
export const GetApiAction=()=>{
    return function(dispatch)
    {
        return GetApiDetails().then((res)=>{
            // console.log(res);
            dispatch({
                type:'GET_DETAILS',
                payload:res.data
            })
        })
    }
}


//delete data
export const DeleteApiAction=(id)=>{
    return function(dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            console.log(res);
            dispatch({
                type:'DELETE_DETAILS',
                payload:true,
            })
        })
    }
}

//add data
export const PostApiAction=(request)=>{
    return function(dispatch)
    {
        return PostApiDetails(request).then((res)=>{
            console.log("resonse from post data...",res);
            dispatch({
                type:'POST_DETAILS',
                payload:'',
            })
        })
    }
}


//get perticular id data

export default (props) => {
    const [detailsbyid, setdetailsbyid] = useState({});
     const GetDetialsId = (requestid) => {
      console.log("request id", requestid);
  
      return GetApiIDDetails(requestid).then((res) => {
        console.log(res);
        setdetailsbyid(res);
      });
    };
    useEffect(() => {
      GetDetialsId(props);
    }, []);
  
    return [detailsbyid];
  };
