import React, { Component } from "react";
import Form from "../src/components/Form/Form";
import logo from "./logo.svg";
import "./App.css";
import { directive } from "@babel/types";

class App extends Component {
  state = {};
  render() {
    return (
      <div class="container mt-4">
        <h1 class="display-4 text-center">My List</h1>
        <Form />
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Name</th>
              <th>Unit</th>
              <th>Completed</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="item-list"></tbody>
        </table>
      </div>
    );
  }
}

export default App;
