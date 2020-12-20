import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import '../styles/index.css';

function ProfileEditor() {
    const [redirect, setRedirect] = useState(true);
    const [username, setUsername] = useState();
    const [profession, setProfession] = useState();
    const [description, setDescription] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + username);
        console.log("profession is " + profession);
        console.log("description is " + description);

    };

    return (
        // (redirect) ? <Redirect to="/"></Redirect> :

        <div>
            <div className="mt-4">
            </div>
            <p>Please create your profile</p>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="form-group">
                        <Col size="4">
                            <img class="card-img" alt="user thumbnail" src="_blank"></img>
                        </Col>
                        <Col size="4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                        <Col size="4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Profession"
                                name="profession"
                                onChange={e => setProfession(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Description"
                                name="description"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <Col size="6">
                        <p>Profile Template Previews</p>
                    </Col>
                    <Col size="6">
                        <p>Profile Template Descriptions</p>
                    </Col>
                </Container>
                <Container className="mt-4">
                    <button className="btn btn-success" type="submit">
                        Save Changes
                    </button><span> </span>

                    <button className="btn btn-success" type="submit">
                        Discard Changes
                    </button>
                </Container>
            </form>
        </div>
    );
};

export default ProfileEditor;