import React, { Component } from "react";
import { addToList } from "../../services/api";

class Form extends Component {
  state = {};

  handleQuantity = e => {
    let eventTarget = e.target;
    this.setState(prevState => ({ ...prevState, quantity: eventTarget.value }));
  };

  handleItem = e => {
    let eventTarget = e.target;
    this.setState(prevState => ({ ...prevState, item: eventTarget.value }));
  };
  handleUnit = e => {
    let eventTarget = e.target;
    this.setState(prevState => ({ ...prevState, unit: eventTarget.value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    addToList(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="list-form">
          <div className="form-group">
            <label for="title">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              onChange={this.handleQuantity}
            />
          </div>
          <div className="form-group">
            <label for="title">Item</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={this.handleItem}
            />
          </div>
          <div className="form-group">
            <label for="title">Unit</label>
            <input
              type="text"
              className="form-control"
              id="unit"
              onChange={this.handleUnit}
            />
          </div>

          <button
            type="submit"
            value="add book"
            className="btn btn-primary btn-block"
            id="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
