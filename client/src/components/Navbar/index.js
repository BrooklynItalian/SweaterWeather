import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbar";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          {/* <NavLink to="/login" activeStyle>
            Login
          </NavLink> */}
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/add-data" activeStyle>
            AddData
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;