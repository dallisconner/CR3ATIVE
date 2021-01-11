// (1) See line 1 of Collabinfo.js for explanation
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Container from "../components/Container";
import '../styles/index.css';
import { List, ListItem } from "../components/List";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import '../styles/index.css';

function NonUserProfiles() {
    // const [redirect, setRedirect] = useState(true);
    const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
      API.getUser()
        .then(res =>{
          console.log(res)
          setUser(res.data)
        })
        .catch(err => console.log(err));
  }

    return (
        // (redirect) ? <Redirect to="/"></Redirect> :

        <div className="NonUserProfiles">
            <p>
                Non-user Profiles Page under construction!
            </p>
            <List>
            {user.map(user => (
                <ListItem key={user._id}>
            <strong>
                      {user.name}{user.profession} {user.description}
                    </strong>
                    </ListItem>
            ))}
            </List>
            <Container className="mt-4">
                <p>Return to <span></span>
                    <Link className="navbar-brand" to="/dashboard">
                        Dashboard
                    </Link>
                </p>
            </Container>
        </div>
    );
}

export default NonUserProfiles;