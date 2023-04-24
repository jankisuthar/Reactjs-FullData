import React, { Component } from 'react';

class ReuseRevision extends Component {
    render() {
        return (
           <>
                        <img src={this.props.imgSrc} alt="mango" width={200}/>
                        <div className="row d-flex justify-content-around">
                            <div className="col">
                                <p>{this.props.title}</p>
                            </div>
                            <div className="col">
                                <span>${this.props.price}</span>
                            </div>
                        </div>
                        <center><button className='btn btn-primary' onClick={this.props.clck}>Click to Change</button></center>
           </>
           
           );
    }
}

export default ReuseRevision;