import React from 'react';
import { Route } from "react-router-dom";

import Home from './home'
import OnePlus from './oneplus'
import Asus from './asus'
import Mi from './mi'

const Main = () => {
    return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/oneplus' component={OnePlus} />
                <Route path='/mi' component={Mi} />
                <Route path='/asus' component={Asus} />
            </div>
    )
}

export default Main