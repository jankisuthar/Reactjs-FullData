import React from 'react';
import { useContext } from 'react';

const theme = {
    dark:{
        foreground:"red",
        background:"yellow"
    },
    light:{
        foreground:"yellow",
        background:"black"
    }
}
const MyTheme = React.createContext(theme.light)
function UseContext(props) {
    const theme = useContext(MyTheme)
    return (
        <div>
           <div className="container">
            <div className="row mt-5">
                <div className="col">
                    <button style={{background:theme.background,color:theme.foreground}}>Click Me!</button>
                    <br />  <br />  <br />  <br />
                    <div className='p-5' style={{background:theme.background,color:theme.foreground}}></div>
                </div>
            </div>
           </div>
        </div>
    );
}

export default UseContext;