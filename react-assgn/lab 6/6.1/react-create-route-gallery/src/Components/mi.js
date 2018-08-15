import React, { Component } from 'react';
import mi1 from '../img/mi1.jpg'
import mi2 from '../img/mi2.jpg'
import mi3 from '../img/mi3.jpg'
import mi4 from '../img/mi4.jpg'

class Mi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgs: [ mi1, mi2, mi3, mi4 ]
         }
    }
    render() { 
        let images = this.state.imgs.map((image,index) => {
             return <img className="img-thumbnail" width="580px" src={image} alt={index+1} key={index}/>
        })
        return ( 
            <div>
            <h3>Mi</h3>
            {images}
            </div>
         );
    }
}
 
export default Mi;