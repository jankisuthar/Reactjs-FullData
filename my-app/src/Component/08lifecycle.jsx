import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor called");
        this.state={counter:0}
      
        // this.state={UserData:'',
        //             Status:"Pending..."}

    }

    // componentWillMount() {
    //         console.log("componentWillMount called");
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log("componentDidMount called");

    //         fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then(
    //             (Response)=>{
    //                 console.log(Response);
    //                 this.setState({UserData:Response,status:'Completed'})
    //             }
    //         ).catch((ErrorHndl)=>{
    //             console.log(ErrorHndl);
               
    //         })
    //     }, 2000);
        
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps called");
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate called");
        console.log("nextProps ",nextProps);
        console.log("nextState",nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //         console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
    }
    btnClck=()=>{
        // this.setState({
        //     counter:this.state.counter+1,
        //     Status:'Completed'
        // })
        console.log("Btn called");
        this.setState({counter:this.state.counter+1})
    }

    DecClck=()=>{
        this.setState({counter:this.state.counter-1})
    }
    render() {
       
        console.log("render called");
        return (
           <>
           <div className="container">
            <div className="row">
                <div className="col">
                 
                    <h1>{this.state.counter}</h1>
                    <button className='btn btn-success' onClick={this.DecClck}>Decrement</button>
                    <button className='btn btn-info' onClick={this.btnClck}>Increment</button>
                    <br />
                    <button className='btn btn-danger' onClick={()=>{
                        console.log("called");
                        this.setState({counter:0})
                    }}>Reset</button>
                    {/* {this.state.Status!='Completed'?'Pending':"Completed"} */}
                    {/* <button className='btn btn-primary' onClick={this.btnClck}>Click Me</button> */}
                    {/* {this.state.Status} */}
                </div>
            </div>
           </div>
           </>
        );
    }
}


export default lifecycle;