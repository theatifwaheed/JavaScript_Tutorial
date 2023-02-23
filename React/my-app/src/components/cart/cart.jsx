import React, { Component } from "react";

class CartScreen extends Component {
  state = {
    // count: 0,
    items: [
      {
        itemId: "cart1",
        count: 0,
      },
      {
        itemId: "cart2",
        count: 0,
      },
      {
        itemId: "cart3",
        count: 0,
      },
    ],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getClasses();
    return (
      <div>
        <span className={classes} style={{ fontSize: 30 }}>
          Cart Items
        </span>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>
              <span className={classes} style={{ fontSize: 15 }}>
                {item.count}
              </span>
              <button
                onClick={() => this.incrementHandle(item)}
                className="btn btn-secondary m-2 btn-md"
              >
                +
              </button>
              <button className="btn btn-secondary m-2 btn-md">-</button>
              <button className="btn btn-danger m-2 btn-md">DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  // incrementHandle(item) {
  //   let index = this.items.indexOf(item);
  //   let allItems = this.items;
  //   allItems[index] = {
  //     itemId: item,
  //     count: allItems[index].count + 1,
  //   };
  //   this.setState({
  //     items: allItems,
  //   });
  // }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter(count) {
    // const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default CartScreen;
