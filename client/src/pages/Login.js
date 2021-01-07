import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
// import { Link } from "react-router-dom";
import '../styles/index.css';

const Login = () => {
  const [isActive, setActive] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    setActive(true);
    console.log("username is " + username);
    console.log("password is " + password);
  };
  const loginComponent = () =>  
    (<div className="" >
      <div className="mt-4">
      </div>
      <p>Please login to continue</p>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                // onChange={e => setUsername(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                // onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
        Submit
          </button>
        </Container>
      </form>
    </div >)
  const redirectComponent = () => (<Redirect to="/profile" />)

  const DynamicComponent = !isActive ? loginComponent : redirectComponent
  console.log(DynamicComponent)

  return <DynamicComponent />
}
    

export default Login;
