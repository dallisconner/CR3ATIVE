import React, { useState, useEffect } from "react";
import { Input, TextArea, FormBtn } from "../components/Form"
import { List, ListItem } from "../components/List"
import Container from "../components/Container";
import Col from "../components/Col";
import '../styles/index.css';
import API from "../utils/API";

function Forum() {
  const [comments, setComments] = useState([]);
  const [formObject, setFormObject] = useState({
    title: "",
    body: "",
    username: ""
  })

  useEffect(() => {
    loadComments()
  }, []);

  function loadComments() {
    API.getComments()
      .then(res => setComments(res.data))
      .catch(err => console.log(err))
      console.log("call complete")
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if(formObject.title && formObject.body) {
      API.saveComments({
        title: formObject.title,
        body: formObject.body,
        username: formObject.username
      })
        .then(() => setFormObject({
          title: "",
          body:"",
          username: ""
        }))
        .then(() => loadComments())
        .catch(err => console.log(err))
    }
  };
  return (
    <div>
      <h1>Create a post</h1>
      <form className="col-12"> 
        <Input 
        onChange={handleInputChange}
        name="title"
        placeholder="Title (required)"  
        />
        <TextArea 
        onChange={handleInputChange}
        name="body" 
        placeholder="Body (required)"  
        />
        <Input 
        onChange={handleInputChange} 
        name="username" 
        placeholder="Username (Optional)" 
        />
        <FormBtn 
          disabled={!(formObject.title && formObject.body)}
          onClick={handleFormSubmit}
        >
          Post
        </FormBtn>
      </form>
      <Container className="mt-4">
        <Col size="6">
          {comments.length ? (
            <List>
              {comments.map(comment => {
                return(
                  <ListItem key={comment._id}>
                    <strong>
                      "{comment.title}" by {comment.username}
                    </strong>
                      <br></br>
                      {comment.body}
                  </ListItem>
                )
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Container>
    </div>
  );
}

//required ref={titleRef}, required ref={bodyRef}, ref={authorRef}, disabled={state.loading}

export default Forum;