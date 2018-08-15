import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movies extends Component {

    render() {
        return (
            <div>
                <ul>
                    <h3>
                    <li>{this.props.movieName}</li>
                    <li>{this.props.moviePrice}</li>
                    </h3>
                </ul>
            </div>
        );
    }
}

Movies.propTypes = {
    moviePrice: PropTypes.number.isRequired,
};

Movies.defaultProps = {
    movieName: 'DEFAULT'
};

export default Movies;