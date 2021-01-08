// (1) See line 1 of Collabinfo.js for explanation
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Container from "../components/Container";
import '../styles/index.css';

function NonUserProfiles() {
    // const [redirect, setRedirect] = useState(true);

    return (
        // (redirect) ? <Redirect to="/"></Redirect> :

        <div className="NonUserProfiles">
            <p>
                Non-user Profiles Page under construction!
            </p>
            <Container className="mt-4">
                <p>Return to <span></span>
                    <Link className="navbar-brand" to="/dashboard">
                        Dashboard
                    </Link>
                </p>
            </Container>
        </div>
    );
}

export default NonUserProfiles;