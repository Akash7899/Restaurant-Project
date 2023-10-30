import { Navigate } from "react-router-dom";


const Logout = () => {
  localStorage.clear();
  return <Navigate replace to="/login"/>
};

export default Logout;
 