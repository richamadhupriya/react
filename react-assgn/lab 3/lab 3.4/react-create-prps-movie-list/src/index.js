import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

var movieList = [
    {
        "name":"Harry Potter",
        "price": 199.00,
        "image": "http://i.ebayimg.com/00/s/NTAwWDM1MA==/z/YjUAAOxyeZNTWIVN/$_3.JPG?set_id=2"
    },
    {
        "name":"Avenger",
        "price": 250.00,
        "image":"https://i.pinimg.com/originals/6f/24/4c/6f244c7570a0ab85475d2fae8fe1988b.jpg"
    }
]

ReactDOM.render(
    <div><br/><h2><b>MOVIE LIST</b></h2>
        <Movies movieArr={movieList}/>
    </div>, document.getElementById('root'));
