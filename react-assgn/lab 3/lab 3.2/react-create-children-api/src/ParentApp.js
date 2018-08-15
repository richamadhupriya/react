import React, { Component } from 'react';

class ParentApp extends Component {

restrictChildren() {
    try {
        React.Children.only(this.props.children)();
        }
    catch (error) {
        alert("The number of children exceeds the required count");
        }
    }

render() {
    var countChild = React.Children.count(this.props.children);
    const children = (this.props.children)
    console.log("Total number of Children is : ");
    console.log(countChild);
    console.log("Children are : ");
    console.log(this.props.children);
    return (
        <div>
        {
            React.Children.map(children, (child, i) => {
            if (i === 1) return
            return child;
            })
        }
        <br /><hr/>
        {this.props.children}
        <br /><hr/>
        <button onClick={this.restrictChildren.bind(this)}>Restrict to one child only</button>
        </div>
        );
    }
}
export default ParentApp;