import React, { Component } from "react";
import NavbarMenu from "../layout/navbar";
import { Container } from "react-bootstrap";

export default class RestaurantDetail extends Component {
  render() {
    return (
      <>
        <Container>
          <NavbarMenu />
          <h1>RestaurantDetail</h1>
        </Container>
      </>
    );
  }
}
