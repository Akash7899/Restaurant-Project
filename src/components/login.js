import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import NavbarMenu from "./layout/navbar";
import NavbarMenu from "../layout/navbar"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login() {
    console.warn("Loginform", this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        // console.warn("resp",resp);

        if (resp.length > 0) {
          // localStorage.clear   //clean the localstorage use console cmd
          localStorage.setItem("login", JSON.stringify(resp));
          // console.warn(this.props.history.push('list'));
          // alert("login Successfully");
        } else {
          alert("Check user name and Password");
        }
      });
    });
  }
  render() {
    return (
      <>
        <NavbarMenu />
        <Container className="mt-5">
          <h1 className="text-center ">Login Form</h1>
          {/* <input type="text" name="name" placeholder="Enter name" onChange={(event)=>this.setState({name:event.target.value})}/><br />
        <input type="password" name="password" placeholder="Enter password" onChange={(event)=>this.setState({password:event.target.value})}/><br />
        <button onClick={()=>{this.login()}}>Login</button> */}
          <div className="loginForm mt-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter email"
                  onChange={(event) =>
                    this.setState({ name: event.target.value })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                // type="submit"
                onClick={() => {
                  this.login();
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Container>
      </>
    );
  }
}
