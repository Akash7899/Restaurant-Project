import React, { Component } from "react";

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({ list: result });
      });
    });
  }
  render() {
    // console.warn(this.state);
    return (
      <>
        <div>
          <h1>Restaurant List</h1>
          {this.state.list ? (
            <div>
              {this.state.list.map((item, i) => (
                <div key={i}>
                  <span>{item.id}</span>
                  <span>{item.name}</span>
                  <span>{item.rating}</span>
                  <span>{item.email}</span><br/>
                  </div>
              ))}
            </div>
          ) : (
            <p>Please Wait...</p>
          )}
        </div>
      </>
    );
  }
}
