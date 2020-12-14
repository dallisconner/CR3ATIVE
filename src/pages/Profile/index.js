// import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
// import { Link } from "react-router-dom";

const Profile = () => {

    const handleSubmit = e => {
        e.preventDefault();

    };

    return (
        <div>
            <div className="mt-4">
            </div>
            <button className="btn btn-success" type="submit">
                Edit
          </button>
            <Col size="4">
                <img class="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
            </Col>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="form-group">
                        <Col size="12">
                            <p>User Information</p>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <p>User defined content</p>
                        </Col>
                    </Row>

                </Container>
                <button className="btn btn-success" type="submit">
                    Request Collab
          </button>
            </form>
        </div>
    );
};

export default Profile;
