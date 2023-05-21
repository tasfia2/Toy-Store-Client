import { useContext } from "react";
import { Button, Container, Nav, Navbar, OverlayTrigger } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Tooltip } from "react-bootstrap";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      color: isActive ? 'red' : 'black',
    }
  }

  return (
    <Navbar
      className=" sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <div className="text-center">
              <img
                src="https://image.spreadshirtmedia.net/image-server/v1/designs/168217885,width=200,height=200.png"
                alt="Website Logo"
                width="20"
                height="20"
                className="mb-1 bg-dark rounded-2"
              />
              <p className="fw-bold text-dark">Chef's Toybox</p>
            </div>
          </Nav>

          <Nav className="mx-auto d-flex align-items-center gap-5">
            <NavLink style={navLinkStyles} to="/">
              Home
            </NavLink>
            <NavLink style={navLinkStyles} to="/blogs">
              Blogs
            </NavLink>
            <NavLink style={navLinkStyles} to="/allToys">
              All Cooking Toys
            </NavLink>

            {user && (
              <>
                <NavLink style={navLinkStyles} to="/myToys">
                  My Cooking Toys
                </NavLink>

                <NavLink style={navLinkStyles} to="/addAToy">
                  Add a Cooking Toy
                </NavLink>
              </>
            )}
          </Nav>

          <Nav>
            {user && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip">{user.displayName}</Tooltip>}
              >
                <img
                  className="rounded-2 mr-5 mx-3"
                  src={user.photoURL}
                  alt="Profile Picture"
                  style={{ width: "40px", height: "40px" }}
                />
              </OverlayTrigger>
            )}

            {user ? (
              <Button
                onClick={handleLogOut}
                variant="danger"
                className="text-white fw-bold border rounded-2"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  variant="danger"
                  className="text-white fw-bold border rounded-2"
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
