import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/">Restaurant</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/List">List</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/create">create</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/search">search</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/details">details</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="/update">update</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="list" element={<RestaurantList />}></Route>
          <Route path="Create" element={<RestaurantCreate />}></Route>
          <Route path="details" element={<RestaurantDetail />}></Route>
          <Route path="search" element={<RestaurantSearch />}></Route>
          <Route path="update/2" element={<RestaurantUpdate />}></Route>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
