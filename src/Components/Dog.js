import React from "react";

class Dog extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dog.name}</h1>
        <img alt="" src={this.props.dog.img} />
      </div>
  )}
}

export default Dog;
