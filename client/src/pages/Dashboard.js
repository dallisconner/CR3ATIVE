// import { Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
              <img className="card-img" alt="user thumbnail" src="data:image/png;base64,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"></img>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="mt-4">
        <div>
          <p>Available Collaborators</p>
          {user.length ? (
            <Row>
              {user.map(users => (
                // links to individual collaborators user_id. What is shown on their page?
                // <ListItem key={users._id}>
                // <Link to={"/user/" + users._id}>
                <strong>

                  <p>{users.name}, {users.username} {users.profession}. {users.description}</p>

                </strong>
                // </Link>
                // </ListItem>
              ))}
            </Row>
          ) : (
              <h3>No Collaborations to Display</h3>
            )}
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;