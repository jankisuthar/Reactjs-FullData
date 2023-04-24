import axios from "axios";

export await function AxioRequest(url,method,headers,params)
{
        return params?axios({
            url:url,
            method:method,
            headers:headers,
            data:params,
            timeout:1000
        }):axios({
            url:url,
            method:method,
            headers:headers,
            data:{},
            timeout:1000
        })
}

// get all users data
const GetApiDetails=()=>{
    const headers={
        'content-Type':'application/json'
    }
    return AxioRequest('http://localhost:3000/details','GET',headers,{}

    )
}


//delete data
const DeleteApiDetails=(id)=>{
    const headers={
        'content-Type':'application/json'
    }
    return AxioRequest('http://localhost:3000/details/'+id,'DELETE',headers,{}

    )
}

// add data
const PostApiDetails=(data)=>{
    return axios.post('http://localhost:3000/details',data)
}


//get perticular user's data(edit data)
const GetApiIDDetails=(id)=>{
    const headers={
        'content-Type':'application/json'
    }
    return AxioRequest('http://localhost:3000/details/'+id,'GET',headers,{}

    )
}
export {GetApiDetails,DeleteApiDetails,PostApiDetails,GetApiIDDetails};