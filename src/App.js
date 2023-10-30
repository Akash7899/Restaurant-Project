import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
// import { Navbar, Container, Nav } from "react-bootstrap";
import Login from "./components/login";
import Logout from "./components/logout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="list" element={<RestaurantList />}></Route>
          <Route path="Create" element={<RestaurantCreate />}></Route>
          <Route path="details" element={<RestaurantDetail />}></Route>
          <Route path="search" element={<RestaurantSearch />}></Route>
          <Route path="update/2" element={<RestaurantUpdate />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
