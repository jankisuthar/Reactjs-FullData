import React, { Component } from 'react';
import ReuseRevision from './reuse-revision';

class CompoRevision extends Component {
    constructor()
    {
        super();
        let img = 'image/c.jfif';
        this.state={Firstimage:img}
    }
    Btnclck=()=>{
        console.log("btn called")
        let Newimg = 'image/apple.jfif'
        this.setState({Firstimage:Newimg})
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5 d-flex">
                    <div className="col-3 border m-2">
                        <ReuseRevision imgSrc={this.state.Firstimage} title="Cherry" price="200" clck={this.Btnclck}/>
                    </div>

                    <div className="col-3 border m-2">
                        <ReuseRevision imgSrc="image/m.jfif" title="Mango" price="300"/>
                    </div>


                    <div className="col-3 border m-2">
                        <ReuseRevision imgSrc="image/apple.jfif" title="Apple" price="400"/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default CompoRevision;