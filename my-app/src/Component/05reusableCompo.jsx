import React, { Component } from 'react';

class reusableCompo extends Component {
    render() {
        return (
           <>
                         <div className="card">
                            <img src={this.props.imgSrc} alt="shoes"  className='img-top img-fluid' loading='lazy'/>
                            <div className="card-body">
                                <h3>{this.props.title}</h3>
                                <div className="row">
                                    <div className="col">
                                        <p>old Price:$<del>{this.props.oldPrice}</del></p>
                                    </div>
                                    <div className="col">
                                        <p>New Price : ${this.props.NewPrice}</p>
                                    </div>
                                </div>
                                <center><button className='btn btn-primary'>Buy Now</button></center>
                            </div>
                        </div>
           </>
        );
    }
}

export default reusableCompo;