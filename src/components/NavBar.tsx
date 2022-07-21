import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Главная</Link>

          <Link to="/login">Войти</Link>
          <Link to="/reg">Зарегистрироваться</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
