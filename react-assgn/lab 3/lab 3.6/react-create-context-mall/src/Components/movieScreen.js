import React, { Component } from 'react';
import { AppContext } from '../App'

class movieScreen extends Component {

    showScreen(screen) {
        return <li key={screen}>{screen}</li>
    }

    showTimes(timing) {
        return <li key={timing}>{timing}</li>
    }

    render() {
        let screens = <AppContext.Consumer>
            {(context) => context.screens.map(screen => this.showScreen(screen))}
        </AppContext.Consumer>

        let times = <AppContext.Consumer>
            {(context) => context.timings.map(timing => this.showTimes(timing))}
        </AppContext.Consumer>
        
        return (
            <div>
                Screen Name:
                <ul>{screens}</ul>

                Show Times:
                <ul>{times}</ul>
            </div>
        );
    }
}

export default movieScreen;