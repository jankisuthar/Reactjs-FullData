export const AddToDO = (data)=>{
    return{
        type : "ADDTODO",
        payload:{
            id : new Date().getTime().toString(),
            data : data
        }
    }
}
export const DeleteToDO = (id)=>{
    return{
        type : "DELETETODO",
        id:id
       
    }
}