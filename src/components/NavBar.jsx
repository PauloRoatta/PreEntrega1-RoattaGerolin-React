import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand id="BrandName" href="#home">Rockeala Indumentaria</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="LinkName" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="LinkName" href="#link">Contacto</Nav.Link>
                        <NavDropdown id="DropName" title="Productos" className="basic-nav-dropdown">
                            <NavDropdown.Item className="LinkName" href="#action/3.1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item className="LinkName" href="#action/3.2">Buzos Canguro</NavDropdown.Item>
                            <NavDropdown.Item className="LinkName" href="#action/3.3">Buzos Cuello Redondo</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    );
}