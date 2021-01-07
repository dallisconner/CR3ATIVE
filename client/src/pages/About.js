import { Link } from "react-router-dom";
import Container from "../components/Container";
import '../styles/index.css';
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
                <div>
                <img src={tristan} />
                </div>
                <div>
                <img src={Dallis} />
                </div>
                <div>
                <img src={jesse} />
                </div>
                <div>
                <img src={allison} />
                </div>
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