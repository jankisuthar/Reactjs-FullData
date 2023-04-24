import React, { Component } from 'react';

class StateRevision extends Component {
    constructor(props)
    {
        super(props);
        let img = 'image/m.jfif';
        this.state={Firstimage:img}
    }
    BtnClick=()=>{
        this.setState({Firstimage:'image/c.jfif'})
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <img src={this.state.Firstimage} alt="mango" />
                        <button className='btn btn-primary' onClick={this.BtnClick}> Click to Change</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default StateRevision;