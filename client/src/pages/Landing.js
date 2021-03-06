// import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import logo from '../styles/logo.png';
import '../styles/index.css';
import Collab from "../styles/Collab_Dia_Final.png";

function Landing() {

    return (
        <div>
            <Container className="mt-3 px-5">
                <Row className="form-group">
                    <Col size="12">
                        <img className="card-img" alt="user thumbnail" src={Collab}></img>
                    </Col>
                </Row>
            </Container>
            <img src={logo} className="App-logo" alt="logo" />
            <Container className="mt-12">
                <Col size="12">
                    <p>What happens when artists collaborate?</p>
                </Col>
                <Col size="12">
                    <p>Collaboration in art promotes each artist's work to help both parties to grow their supporters. Cr3ative is a mobile-first web application to promote art collaboration in all forms. Here at Cr3ative, we believe in the power of working together, we facilitate opportunities for artists to work and play together in meaningful ways. Whether you are launching a mission-driven program, designing a mural, or looking to collaborate on online artful installations, Cr3ative allows you to create exceptional works and exchange value with other artists. Come join us at Cr3ative and make a bigger impact by building your following and your network while doing what you love.</p>
                </Col>
            </Container>
            <Container className="mt-4">
                {/* change link colors to white text */}
                <button className="outline" type="submit"> <a href="/login" style={{ color: '#FFF' }}>
                    Login
                    </a>
                    </button><span> or </span>
                    <button className="outline" type="submit"> <a href="/signup" style={{ color: '#FFF' }}>
                    Sign Up
                    </a>
                    </button>
            </Container>
        </div>
    );
};

export default Landing;