import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("THIS: ", this);

    this.handleIncrement = this.handleIncrement.bind(this);
  }
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
        <span style={{ fontSize: 15 }} className={classes}>
          {this.formatCounter()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        <button
          onClick={this.handleIncrementArrowFun}
          className="btn btn-secondary m-2 btn-lg"
        >
          Increment Arrow Fun
        </button>
        <button
          onClick={() => this.handleIncrementArgument({ arg: 10 })}
          className="btn btn-secondary m-2 btn-lg"
        >
          Increment Argument
        </button>
        <div>
          {this.state.tags.length === 0 && "Please Create the TAG"}
          {/* Shows the text if tags length = 0 |||| Last wale k bad jo ho ga wo print hoga... */}
          {/* Condition_1 && Condition_2 && "Condition_3" => is me "Condition_3" Print hoga */}
          {this.renderTags()}
        </div>

        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* </React.Fragment> */}
      </div>
    );
  }

  handleIncrementArrowFun = () => {
    // arrow function doesnt need constructor binding...
    console.log("Increment Arrow Button: ", this);
    this.incrementCount();
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleIncrementArgument = (arg) => {
    console.log("Argument: ", arg);
    this.setState({ count: this.state.count + 1 });
  };

  handleIncrement() {
    // this use karne k lie bind karna parta hai constructor me...
    console.log("Increment Button Clicked!", this);
    this.incrementCount();
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p style={this.styles}>There are no TAGS</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
