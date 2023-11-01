const InitialData={
    details:[],
    isResponse:false,
    isDELETERespone:false,
    isUpdate: false,

}
const reducer=(state=InitialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return {
                details:action.payload
            }
        case 'POST_DETAILS':
            return{
                isResponse:action.payload
            }
        case 'DELETE_DETAILS':
            return{
                isDELETERespone:action.payload
            }
        case 'UPDATE_DETIALS':
            return {
                isUpdate: action.payload,
            };
        default:
            return state;
        
    }
}
export default reducer;