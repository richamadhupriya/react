import React, { Component } from 'react';

const createReactClass = require('create-react-class');

const WelcomeUsers = createReactClass({
    render: function () {
        return (
            <div>
                <h1>Hello there!! Welcome to new class!</h1>
            </div>
        );
    }
});

export default WelcomeUsers;
