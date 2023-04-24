import React, { Component } from 'react';
import ReusableCompo from './05reusableCompo'

class Compo extends Component {
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4">
                        <ReusableCompo imgSrc="image/s1.jfif" title="Nike" oldPrice="5000" NewPrice="4000"/>
                    </div>
                    <div className="col-4">
                        <ReusableCompo imgSrc="image/s2.jfif" title="Puma" oldPrice="6000" NewPrice="4500"/>
                    </div>
                    <div className="col-4">
                        <ReusableCompo imgSrc="image/s3.jfif" title="Adidas" oldPrice="7000" NewPrice="6500"/>
                    </div>
                    <div className="col-4 mt-5">
                        <ReusableCompo imgSrc="image/s4.jfif" title="Sparx" oldPrice="4000" NewPrice="3500"/>
                    </div>
                </div>
            </div>
            <h1  loading='lazy'>hello</h1>
            </>
        );
    }
}

export default Compo;