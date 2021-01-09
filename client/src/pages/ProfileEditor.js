import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Pictures from '../components/Pictures'
import Buttons from '../components/Buttons'
import { Input, FormBtn } from "../components/Form";
import '../styles/index.css';
const API_URL = 'http://localhost:3001';

function ProfileEditor() {
  const [pics, setPics] = useState([]);
  const [user, setUser] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [formObject, setFormObject] = useState({});
  const sessionUser = JSON.parse(sessionStorage.getItem("user"))

  const onChange = e => {
    const files = Array.from(e.target.files)

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`${API_URL}/image-upload/${sessionUser._id}`, {
      method: 'POST',
      body: formData
    })
      .then(res => {
        console.log("test API_URL")
        if (!res.ok) {
          throw res
        }
        return res.json()
      })
      .then(user => {
        console.log("test then test_1")
        console.log(user)
        setPics(user.image)
      })
      .catch(err => {
        err.json().then(e => {
          console.log("test catch error")
        })
      })
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("test handleInputChange")
    setFormObject({ ...formObject, [name]: value })
  };

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
    console.log(sessionUser)
    API.getUser(sessionUser._id)
      .then(res => {
        console.log("getUser", res)
        setUser(res.data)
        setPics(res.data.image)
      })
      .catch(err => console.log(err));
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("test handleformsubmit")
    if (formObject.profession && formObject.description) {
      console.log("test if statement")
      API.saveUser({
        image: formObject.image,
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
        <Col size="4">
          <img className="card-img" alt="user thumbnail" src={user.image}></img>
        </Col>
        <form id="create-user-form">
          <Container className="mt-3 px-5">
            <Row className="form-group">
              <Col size="4">
                <div>
                  {/* <Pictures pics={pics} /> */}
                  <Buttons onChange={onChange} />
                </div>
              </Col>
              <Col size="12">
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