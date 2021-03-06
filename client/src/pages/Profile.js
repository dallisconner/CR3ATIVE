// (1) See line 1 of Collabinfo.js for explanation.
// import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import '../styles/index.css';
import { List, ListItem } from "../components/List";
import API from "../utils/API";

const Profile = () => {
  // const [redirect, setRedirect] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"))
    API.getUser(sessionUser._id)
      .then(res => {
        console.log("test Profile getUser")
        setUser(res.data)
      })
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
      <button className="outline" type="submit"> <a href="/profile/editor" style={{ color: '#FFF' }}>
        Edit
            </a>
      </button>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="">
              <img className="card-img" alt="user thumbnail" src={user.image}></img>
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              {/* <p>User Information</p> */}
              <div>
                <strong>
                  <Row>
                  <p>Name: {user.name}</p>
                  </Row>
                  <Row>
                  <p>Email: {user.email}</p>
                  </Row>
                  <Row>
                  <p>Username: {user.username}</p>
                  </Row>
                  <Row>
                  <p>Profession: {user.profession}</p>
                  </Row>
                  <Row>
                  <p>Description: {user.description}</p>
                  </Row>
                </strong>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Profile;
