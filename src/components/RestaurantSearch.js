import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
    };
  }
  search(key) {
    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
      data.json().then((resp) => {
        // console.warn("resp",resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: null });
        } else {
          this.setState({ noData: resp, searchData: null });
        }
      });
    });
  }
  render() {
    return (
      <Container>
        <h1>Restaurant Search</h1>
        <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
        />
        <div>
          {this.state.searchData ? (
            <div>
              {this.state.searchData.map((item, i) => (
                <div key={i}>{item.name}</div>
              ))}
            </div>
          ) : (
            ""
          )}
          {this.state.noData ? <h3>No Data Found</h3> : null}
        </div>
      </Container>
    );
  }
}
