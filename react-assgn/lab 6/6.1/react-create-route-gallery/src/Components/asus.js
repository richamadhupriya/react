import React, { Component } from 'react';

import asus1 from '../img/asus1.jpg'
import asus2 from '../img/asus2.jpg'
import asus3 from '../img/asus3.jpg'
import asus4 from '../img/asus4.jpg'

class Asus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgs: [ asus1, asus2, asus3, asus4 ]
         }
    }
    render() { 
        let images = this.state.imgs.map((image,index) => {
             return <img className="img-thumbnail" width="580px" src={image} alt={index+1} key={index}/>
        })
        return ( 
            <div>
            <h3>Asus</h3>
            {images}
            </div>
         );
    }
}
 
export default Asus;