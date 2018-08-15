import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

var name = "Thor";
var price = 69;

ReactDOM.render(
    <div><br/><h1><b>MOVIES LIST</b></h1>
        <Movies movieName={name} moviePrice={price}/>
    </div>, document.getElementById('root'));
