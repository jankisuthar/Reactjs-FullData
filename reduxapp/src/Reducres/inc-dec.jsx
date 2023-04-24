const intialData = 0;
const ChangeNumber = (state=intialData,action)=>{
        switch(action.type)
        {
            case 'INCREMENT':
                return state+=1;
            case 'DECREMENT':
                return state-=1;
            case 'RESET':
                return intialData;
            default:
                return state;
        }
}
export default ChangeNumber;