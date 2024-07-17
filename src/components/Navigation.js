import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../styles/Navigation.css";
import CartItemCounter from "./CartItemCounter";
import MenuLogged from "./MenuLogged";
import MenuNotLogged from "./MenuNotLogged";

const Navigation = () => {
  const [userLog, setUserLog] = useState([]);

  let { getUserAssets } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getUserAssets();
        if (isMounted) {
          setUserLog(result);
        }
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
            console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#2c5728" }} expand="lg">
        <div className="d-lg-none">
          <CartItemCounter />
        </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          className="p-4"
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        ></Navbar.Offcanvas>

        <Nav>
          {userLog && <MenuLogged />}
          {!userLog && <MenuNotLogged />}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
