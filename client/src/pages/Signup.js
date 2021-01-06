import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import '../styles/index.css';


const Signup = () => {
  const [redirect, setRedirect] = useState(false);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("test handleInputChange")
    setFormObject({ ...formObject, [name]: value })
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("test handlformsubmit")
    if (formObject.name && formObject.username && formObject.password && formObject.email) {
      console.log("test if statement");
      API.saveUser({
        name: formObject.name,
        username: formObject.username,
        password: formObject.password,
        age: formObject.age,
        email: formObject.email,
        phone: formObject.phone
      })
        .then(res => {
          sessionStorage.setItem("user", JSON.stringify(res.data))
          setRedirect(true)}
          )
        .catch(err => console.log(err));
    }
  };

  return (
    (redirect) ? <Redirect to="/profile/editor"></Redirect> :

      <div>
        <div className="mt-4">
        </div>
        <p>Enter your registration details</p>
        <form>
          <Container className="mt-3 px-5">
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="username"
                  placeholder="Username (required)"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="age"
                  placeholder="Age"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="phone"
                  placeholder="Phone"
                />
              </Col>
            </Row>
            {/* <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="photo"
                  placeholder="Photo"
                />
              </Col>
            </Row> */}
            <FormBtn
              disabled={!(formObject.name && formObject.username && formObject.password && formObject.email)}
              onClick={handleFormSubmit}
            >
              Submit
              </FormBtn>
          </Container>
          <Container className="mt-4">
            <p>Already registered? <span></span>
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
