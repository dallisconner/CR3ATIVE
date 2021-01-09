// import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Container";
import API from "../utils/API";
import Col from "../components/Col";
import Row from "../components/Row";
import { List, ListItem } from "../components/List";
import '../styles/index.css';


function Dashboard() {
  // const [redirect, setRedirect] = useState(true);
  const [user, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"))
    API.getUsers(sessionUser._id)
      .then(res => {
        console.log("Dashboard", res)
        setUsers(res.data)
      })
      .catch(err => console.log(err));
  }


  return (
    // (redirect) ? <Redirect to="/"></Redirect> :

    <div className="Dashboard">
      <Container className="mt-4">
        <div>
          <p>Collab Showcase</p>
          <Row>
            <Col size="4">
              <img className="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
            </Col>
            <Col size="4">
              <img className="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
            </Col>
            <Col size="4">
              <img className="card-img" alt="user thumbnail" src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography-thumbnail.png"></img>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mt-4">
        <div>
          {user.length ? (
            <List>
              {user.map(users => (
                <ListItem key={users._id}>
                  <Link to={"/user/" + users._id}>
                    <strong>
                      {users.name}{users.profession} {users.description}
                    </strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Collaborations to Display</h3>
            )}
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;