import React, { Component } from 'react';

class State extends Component {
    constructor(props)
    {
        super(props);
        this.state={BookName:"Three Idiots",
                    Author:"Chetan Bhagat"};


        this.state={a:0,b:10}
              
    }
ClickData=()=>{
    this.setState({BookName:"Two States",
Author:"Someone Bhagat"})
  }
 
    render() {
       
        return (
           <>
          <div className="container">
            <div className="row mt-5">
                <div className="col">
                    {this.state.BookName}
                    <button className='btn btn-primary' onClick={this.ClickData}>Click Me!</button>
                    {this.state.Author}
                    <br />
                    {this.state.a+this.state.b}
                   <button className='btn btn-warning mt-5' onClick={()=>{
                    this.setState({a:10,b:10})
                   }}>Click me! </button>
                </div>
            </div>
          </div>
           </> 
        );
    }
}

export default State;