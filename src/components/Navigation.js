import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../styles/Navigation.css";
import CartItemCounter from "./CartItemCounter";
import MenuLogged from "./MenuLogged";
import MenuNotLogged from "./MenuNotLogged";
import { OffCanvasNav } from "./OffCanvasNav";

const Navigation = () => {
  const [userLog, setUserLog] = useState([]);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

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
    <>
      <Navbar style={{ backgroundColor: "#2c5728" }} expand="lg">
        <Container>
          <Navbar.Brand className="">
            <Link type="link" to="/">
              <img
                className="brand-image"
                src="/logo-2.png"
                alt=""
                height={55}
              />
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <div className="d-lg-none">
              <CartItemCounter />
            </div>
            <Link
              className="mx-2"
              to={`/profile/${userLog.user_id}/${userLog.username}`}
            >
              <img
                style={{
                  borderRadius: "50%",
                  border: "solid 3px white",
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                src={userLog.avatar}
                size="40"
                round="true"
                height={45}
                width={45}
                alt="user-avatar"
              />
            </Link>
            <Navbar.Toggle
              className="mx-2"
              aria-controls={`offcanvasNavbar-expand-lg`}
              onClick={handleOffcanvasShow}
            />
            <Navbar.Offcanvas
              className="p-4"
              show={showOffcanvas}
              onHide={handleOffcanvasClose}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Link type="link" to="/">
                  <img
                    className="brand-image"
                    src="/logo-2.png"
                    alt=""
                    height={55}
                  />
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <OffCanvasNav onLinkClick={handleOffcanvasClose} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
          <Nav className="d-none d-lg-block">
            {userLog.user_id ? <MenuLogged /> : <MenuNotLogged />}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
