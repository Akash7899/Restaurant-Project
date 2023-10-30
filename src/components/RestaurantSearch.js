import React, { Component } from "react";
import { Table, Container, Form } from "react-bootstrap";
import NavbarMenu from "../layout/navbar";

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
      <>
        <NavbarMenu />
        <Container className="mt-5">
          <h1 className="text-center">Restaurant Search</h1>
          <div className="searchBar">
            <Form>
              <input
                type="text"
                onChange={(event) => this.search(event.target.value)}
                className="mb-2 mt-2 search_inputbox"
                placeholder="search Resto..."
              />
            </Form>
          </div>
          <div>
            {this.state.searchData ? (
              <div>
                <Table striped bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Rating</th>
                      <th>Email</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.searchData.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              ""
            )}
            {this.state.noData ? <h3>No Data Found</h3> : null}
          </div>
        </Container>
      </>
    );
  }
}
