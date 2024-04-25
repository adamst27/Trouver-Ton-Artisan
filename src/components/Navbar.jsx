import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event) => {
    // Cela permet de assurer que la valeur de la recherche est mise à jour et va etre utiliser comme un param dans l'url
    setSearchQuery(event.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/Logo.png" alt="logo" width={"100px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/nos-artisans?category=Bâtiment">
              Bâtiment
            </Nav.Link>
            <Nav.Link as={Link} to="/nos-artisans?category=Services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/nos-artisans?category=Fabrication">
              Fabrication
            </Nav.Link>
            <Nav.Link as={Link} to="/nos-artisans?category=Alimentation">
              Alimentation
            </Nav.Link>
          </Nav>
          <Form inline className="d-flex">
            <FormControl
              type="search"
              placeholder="noms/spécialités/villes ..."
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success">
              <Nav.Link as={Link} to={`/nos-artisans?search=${searchQuery}`}>
                Rechercher
              </Nav.Link>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
