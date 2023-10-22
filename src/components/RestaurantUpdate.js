import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      address: null,
      rating: null,
      email: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant/2").then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({
          id: result.id,
          name: result.name,
          address: result.address,
          rating: result.rating,
          email: result.email,
        });
      });
    });
  }
  Update() {
    fetch("http://localhost:3000/restaurant/"+this.state.id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant Data update successfully");
      });
    });
  }

  render() {
    // console.warn(this.props.match.params.id);
    console.warn(this.state);
    return (
      <>
        <Container>
          <h1>RestaurantCreate</h1>
          <input
            onChange={(event) => {
              this.setState({ id: event.target.value });
            }}
            placeholder="Restaurant ID"
            value={this.state.id}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurant Name"
            value={this.state.name}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Restaurant Address"
            value={this.state.address}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="Rating"
            value={this.state.rating}
          />
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Restaurant Email"
            value={this.state.email}
          />
          <br />
          <br />
          <Button
            onClick={() => {
              this.Update();
            }}
          >
            Update Restaurant
          </Button>
        </Container>
      </>
    );
  }
}
