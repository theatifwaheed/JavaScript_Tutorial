import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    let classes = this.getClasses();
    return (
      <div>
        {/* <React.Fragment> */}
        {/* <h1>{this.state.count}</h1> */}
        <span style={{ fontSize: 30 }} className={classes}>
          {this.formatCounter()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {/* </React.Fragment> */}
      </div>
    );
  }
  getClasses() {
    let classes = "badge m-2 badge";
    classes += this.state === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
