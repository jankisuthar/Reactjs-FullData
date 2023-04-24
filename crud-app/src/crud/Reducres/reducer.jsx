const IntialData={
    details:[],
    isDELETEResponse:false,
    isResponse:false,

}

const reducer = (state=IntialData,action)=>{
    switch(action.type)
    {
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
        case  'DELETE_DETAILS':
            return{
                isDELETEResponse:action.payload
            }
        case  'POST_DETAILS':
            return{
                isResponse:action.payload
            }
        default: return state;
    }
}
export default reducer;