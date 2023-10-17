import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/List">List</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
          <li>
            <Link to="/details">details</Link>
          </li>
          <li>
            <Link to="/update">update</Link>
          </li>
        </ul>
        <Routes>          
          <Route path="list" element={<RestaurantList />}></Route>
          <Route path="Create" element={<RestaurantCreate />}></Route>
          <Route path="details" element={ <RestaurantDetail />}></Route>
          <Route path="search" element={ <RestaurantSearch />}></Route>
          <Route path="update" element={ <RestaurantUpdate />}></Route>
          <Route path="/" exact element={ <Home />}></Route>           
        </Routes>
      </Router>
    </>
  );
}

export default App;
