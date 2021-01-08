import { Link } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import '../styles/index.css'
import tristan from '../styles/tristan.jpeg';
import Dallis from '../styles/Dallis.png';
import jesse from '../styles/jesse.jpeg';
import allison from '../styles/allison.jpeg';


function About() {
    return (
        <div className="About">
            <p>
                Meet The CR3ATIVE Team:
            </p>
            <Container>
                <Row>
                    <Col size="6">
                    <a target="_blank" href="https://github.com/teastman201">
                        <img src={tristan} className="tristan" alt="tristan" /> </a>
                        <p> Tristan Eastman</p>
                    </Col>
                    <Col size="6">
                        <a target="_blank" href="https://github.com/dallisconner">
                            <img src={Dallis} className="Dallis" alt="Dallis" /> </a>
                        <p>Dallis Conner</p>
                    </Col>
                </Row>
                <Row>
                    <Col size="6">
                    <a target="_blank" href="https://github.com/jesseziros">
                        <img src={jesse} className="jesse" alt="jesse" /></a>
                        <p>Jesse Ziros</p>
                    </Col>
                    <Col size="6">
                    <a target="_blank" href="https://github.com/haverab">
                        <img src={allison} className="allison" alt="allison" /></a>
                        <p>Allison Haver</p>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-4">
                {/* change link colors to white text */}
                <Link
                    to="/login" style={{ color: '#FFF' }}>
                    Login
                    </Link><span> </span>

                <Link
                    to="/signup" style={{ color: '#FFF' }}>
                    Sign Up
                    </Link>
            </Container>
        </div>
    );
}

export default About;