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
      <Col size="4">
        <img className="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
      </Col>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <p>User Information</p>
              {/* add below as dynamic database call*/}
              <p>name, email, age, profession, desription, image </p>
              <div>
                {user.length ? (
                  <List>
                    {user.map(users => (
                      <ListItem key={users._id}>
                        <strong>
                          <p>{users.name}</p>
                          <p>{users.email}</p>
                          <p>{users.username}</p>
                          <p>{users.profession}</p>
                          <p>{users.description}</p>
                        </strong>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                    <h3>No Collaborations to Display</h3>
                  )}
              </div>
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <p>User defined content</p>

            </Col>
          </Row>

        </Container>
        <button className="outline" type="submit" style={{ color: '#FFF'}} >
          Request Collab
          </button>
      </form>
    </div>
  );
};

export default Profile;
