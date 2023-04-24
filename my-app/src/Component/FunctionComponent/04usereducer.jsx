import React,{Suspense} from 'react';
import { useReducer } from 'react';
const About = React.lazy(() => import("./05About"));

const intialdata = {counter:0}

function MyFunc(state,action)
{
    switch(action.type)
    {
        case 'Increment':
            return {counter:state.counter+1}
        case 'Decerement':
            return {counter:state.counter-1}
        default: 
            throw new Error();

    }
}

function Usereducer(props) {
    const[state,dispatch]=useReducer(MyFunc,intialdata);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                       
                        <button className='btn btn-success' onClick={()=>{
                            console.log("btn called");
                            dispatch({type:'Decerement'})}}>Decrement</button>
                        <h1>{state.counter}</h1>
                        <button className='btn btn-primary' onClick={()=>dispatch({type:"Increment"})}>Increment</button>

                        <Suspense fallback={<div>Loading</div>}>
				            <About />
			            </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usereducer;