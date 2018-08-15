import React, { Component } from 'react';

class Movies extends Component {

    render() {

        return (
            <div>
                {this.props.movieArr.map(function (movieList, i) {
                    return (
                        <ul>
                            <h3>
                            <img src={movieList.image} tilte={movieList.name} height="400" width="500" alt={movieList.name}/>
                           <li> {movieList.name}</li>
                            <li>${movieList.price}</li><br/></h3>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default Movies;