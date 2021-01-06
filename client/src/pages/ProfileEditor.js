import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Input, FormBtn } from "../components/Form";
import '../styles/index.css';

function ProfileEditor() {
  const [user, setUser] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("test handleInputChange")
    setFormObject({ ...formObject, [name]: value })
  };

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
    const sessionUser = JSON.parse(sessionStorage.getItem("user"))
    console.log(sessionUser)
    API.getUser(sessionUser._id)
      .then(res =>{
        console.log("getUser", res)
        setUser(res.data)
      })
      .catch(err => console.log(err));
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("test handleformsubmit")
    if (formObject.profession && formObject.description) {
      console.log("test if statement")
      API.saveUser({
        // image: formObject.image,
        profession: formObject.profession,
        description: formObject.description
      })
        .then(res => setRedirect(true))
        .catch(err => console.log(err));
    }
  };

  const discardForm = e => {
    e.preventDefault();
    console.log("test discardForm");
    document.getElementById("create-user-form").reset();
  };

  return (
    (redirect) ? <Redirect to="/dashboard"></Redirect> :

      <div>
        <div className="mt-4">
        </div>
        <p>Hello {user.name} please complete your profile</p>
        <form id="create-user-form">
          <Container className="mt-3 px-5">
            <Row className="form-group">
              <Col size="">
                <img src="https://placehold.it/150x150" alt="Placeholder" class="img-thumbnail"></img>
              </Col>
              {/* <Col size="4">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col> */}
              <Col size="4">
                <Input
                  onChange={handleInputChange}
                  name="profession"
                  placeholder="Profession"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="12">
                <Input
                  onChange={handleInputChange}
                  name="description"
                  placeholder="Description"
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
            <FormBtn
              disabled={!(formObject.profession && formObject.description)}
              onClick={handleFormSubmit}
            >
              Save Changes
                    </FormBtn>
            <FormBtn
              onClick={discardForm}                    >
              Discard Changes
                    </FormBtn>
          </Container>
        </form>
      </div>
  );
};

export default ProfileEditor;