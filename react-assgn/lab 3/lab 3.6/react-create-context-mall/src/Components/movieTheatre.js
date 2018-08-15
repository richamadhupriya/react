import React, { Component } from 'react';
import { AppContext } from '../App'

import movieScreen from './movieScreen'

class movieTheatre extends Component {
    render() {
        return (
            <div>
                Theatre Name: &nbsp;
                    <AppContext.Consumer>
                        {(context) => context.theatre}
                    </AppContext.Consumer>
                    <br/><br/>
                <movieScreen />
            </div>
        );

    }
}

export default movieTheatre;