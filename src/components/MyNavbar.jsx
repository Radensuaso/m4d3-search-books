import { Container, Nav, Navbar } from "react-bootstrap"

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default MyNavbar
