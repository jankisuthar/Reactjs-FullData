import axios from "axios";

export async function AxiosRequest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method : method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method : method,
        headers:headers,
        data:{},
        timeout:1000
    })
}

//get data
const GetApiDetails=()=>{
   const headers={
        'content-type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details','GET',headers,{})
}

//post data
const PostApiDetails=(data)=>{
   return axios.post('http://localhost:3000/details',data);
// const headers={
//     'content-type':'application/json'
// }
// return AxiosRequest('http://localhost:3000/details','POST',headers,data)
 }

 //delete data
const DeleteApiDetails=(id)=>{
   
 const headers={
     'content-type':'application/json'
 }
 return AxiosRequest('http://localhost:3000/details/'+id,'DELETE',headers)
  }

  //get perticular data
  const UpdateApiDetails=(id)=>{
   
    const headers={
        'content-type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'GET',headers,{})
     }
 

     //update
     const UpdateApiDetailsn = (data, id) => {
        const headers = {
          "content-type": "application/json",
        };
        return AxiosRequest('http://localhost:3000/details/'+id,'PUT',headers,data)
        // return axios.put(
        //     'http://localhost:3000/details/'+id,
        //   data
        // );
      };

export {GetApiDetails,PostApiDetails,DeleteApiDetails,UpdateApiDetails,UpdateApiDetailsn};
