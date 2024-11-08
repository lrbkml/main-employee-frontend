import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
// import avatar from "./avatar.png.png"; // Add an avatar image in your src folder

const Footer = () => {
    return (
        <Navbar bg="primary" variant="dark" className="footer">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {/* <img
                        src={avatar}
                        alt="Laraib Kamal Avatar"
                        className="footer-avatar"
                    /> */}
                    <strong>Laraib Kamal</strong>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="https://laraibkml.netlify.app/" target="_blank" className="footer-link">
                        Visit My Portfolio
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Footer;
