import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class RestaurantCreate extends Component {
  constructor(){
    super();
    this.state={
      id:null,
      name:null,
      address:null,
      rating:null,
      email:null
    }
  } 
  create(){
    // console.warn(this.state );
    fetch("http://localhost:3000/restaurant",{
      method:"post",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Restaurant Data Added successfully")
      })
    })
  }
  render() {
    return (
      <>
        <Container>
        <h1>RestaurantCreate</h1>
          <input onChange={(event)=>{this.setState({id:event.target.value})}} placeholder="Restaurant ID"/><br/><br/>
          <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name"/><br/><br/>
          <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant Address"/><br/><br/>
          <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Rating"/><br/><br/>
          <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email"/><br/><br/>
          <Button onClick={()=>{this.create()}}>Add Restaurant</Button>
        </Container>
      </>
    );
  }
}
