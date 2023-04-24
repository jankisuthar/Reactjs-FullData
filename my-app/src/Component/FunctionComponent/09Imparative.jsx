import React from 'react';
import { useImperativeHandle,forwardRef } from 'react';
import { useRef } from 'react';

function Imparative(props,ref) {
    const inputref = useRef();
    useImperativeHandle(ref,()=>({
        focus:()=>{
            inputref.current.focus();   
        }
    }))
    function chckdata()
    {
        console.log(inputref.current.value);
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <input type="text" className='from-control' ref={inputref}/>
                        <button className='btn btn-primary' onClick={chckdata}>Check Ref</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Imparative = forwardRef(Imparative);
export default Imparative;