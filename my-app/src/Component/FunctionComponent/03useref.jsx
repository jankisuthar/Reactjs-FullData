import React, { useRef } from 'react';

function Useref(props) {
    const inputData = useRef(null)
    console.log(inputData.current);

  

    const ButtonClck=()=>{
        console.log("Btn called");
        inputData.current.focus();
        if(inputData.current.value  == "")
        {
            alert("please Enter Data!");
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <input type="text" className='form-control' ref={inputData}/>
                        <button className='btn btn-success mt-3' onClick={ButtonClck}>Click me to Focus</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Useref;