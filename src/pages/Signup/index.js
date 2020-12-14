import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullname, setFullName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("full name is " + fullname);
    console.log("username is " + username);
    console.log("password is " + password);
    console.log("confirmed password is " + confirmpassword);

  };

  return (
    <div>
      <div className="mt-4">
      </div>
      <p>Enter your registration details</p>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                name="fullname"
                onChange={e => setFullName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={e => setUsername(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                name="confirmpassword"
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <p>Return to <span></span>
            <Link className="navbar-brand" to="/login">
              Login
      </Link>
          </p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;