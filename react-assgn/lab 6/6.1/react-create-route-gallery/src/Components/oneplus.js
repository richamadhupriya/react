import React, { Component } from 'react';
import oneplus1 from '../img/oneplus1.jpg'
import oneplus2 from '../img/oneplus2.jpg'
import oneplus3 from '../img/oneplus3.jpg'
import oneplus4 from '../img/oneplus4.jpg'

class OnePlus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgs: [ oneplus1, oneplus2, oneplus3, oneplus4 ]
         }
    }
    render() { 
        let images = this.state.imgs.map((image,index) => {
             return <img className="img-thumbnail" width="580px" src={image} alt={index+1} key={index}/>
        })
        return ( 
            <div>
            <h3>OnePlus</h3>
            {images}
            </div>
         );
    }
}
 
export default OnePlus;