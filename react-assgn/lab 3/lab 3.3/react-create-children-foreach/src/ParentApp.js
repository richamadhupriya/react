import React, { Component } from 'react';

class ParentApp extends Component {

    render() {
        const childArr = ["Anju","Vikash","Aditya"];
        var length=0;
        React.Children.forEach(childArr,
        child=>(
            length+=1
        ));
        React.Children.forEach(this.props.children,
        child=>(console.log(child)));

        return(
            <div>
                {this.props.children}
                {childArr.map((child, index) =>
                    (<h3>
                        String: {child}<br/>
                        Index: {index}<br/>
                        Length: {child.length}</h3>)
                )
                }
                <br /><hr />
                <h3>Total number of strings : {length}</h3>
            </div>
        );
    }
}

export default ParentApp;