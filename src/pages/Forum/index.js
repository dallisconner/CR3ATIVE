import { Link } from "react-router-dom";
import Container from "../../components/Container";
import './index.css';

function Forum() {
    return (
        <div className="Forum">
            <p>
                Page under construction!
            </p>
            <Container className="mt-4">
                <p>Return to <span></span>
                    <Link className="navbar-brand" to="/signup">
                        Sign Up
                    </Link>
                </p>
            </Container>
        </div>
    );
}

export default Forum;