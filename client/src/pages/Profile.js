// (1) See line 1 of Collabinfo.js for explanation.
// import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import '../styles/index.css';
import API from "../utils/API";

const Profile = () => {
  // const [redirect, setRedirect] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    API.getUser()
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  };

  const handleSubmit = e => {
    e.preventDefault();

  };

  return (
    // (redirect) ? <Redirect to="/ProfileEditor"></Redirect> :

    <div>
      <div className="mt-4">
      </div>
      <button className="btn btn-success" type="submit"> <a href="/profile/editor" style={{ color: '#FFF' }}>
        Edit
            </a>
      </button>
      <Col size="4">
        <img className="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
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
