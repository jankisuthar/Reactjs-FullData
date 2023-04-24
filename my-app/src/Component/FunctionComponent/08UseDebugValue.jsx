import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseDebugValue(msg,delay) {
const[data,setdata] = useState('');
useEffect(()=>{
    setTimeout(() => {
        setdata(msg)
    }, delay);
})

React.useDebugValue(data,data=>
    data?"set":"not set"
    );
    return data;
}
function Demo()
{
    const delaymsg = UseDebugValue("React UseDebugValue",1000)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {delaymsg}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;