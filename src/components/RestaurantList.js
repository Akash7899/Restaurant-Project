import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant/").then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({ list: result });
      });
    });
  }
  render() {
    // console.warn(this.state);
    console.log(this.state);
    return (
      <>
        <Container>
          <h1>Restaurant List</h1>
          {this.state.list ? (
            <div>
              <Table striped bordered hover className="text-center">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Opration</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list.map((item, i) => (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>
                        <Link to={"/update/" + item.id} className="p-2">Edit</Link>
                        <Link to={"/update/" + item.id} className="p-2">Delete</Link>
                        {/* <span className="p-2" onClick={this.delete}>Delet</span> */}
                      </td>
                    </tr>
                    // <div key={i}>
                    //   <span>{item.id}</span>
                    //   <span>{item.name}</span>
                    //   <span>{item.rating}</span>
                    //   <span>{item.email}</span>
                    //   <br />
                    // </div>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p>Please Wait...</p>
          )}
        </Container>
      </>
    );
  }
}
