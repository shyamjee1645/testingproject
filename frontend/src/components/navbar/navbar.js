import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarHome() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FindYourHome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#homes">Find Your Home</Nav.Link>
            <Nav.Link href="#orders">Your Residence Collections</Nav.Link>
            <Nav.Link href="#payments">Payments</Nav.Link>
          </Nav>
          <Button variant="light" className="ms-auto">Log In</Button>
          
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHome;