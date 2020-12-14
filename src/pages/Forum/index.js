// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Col from "../../components/Col";
import './index.css';

function Forum() {
    // const titleRef = useRef();
    // const bodyRef = useRef();
    // const authorRef = useRef();
    // const [state, dispatch] = useRef();

    const handleSubmit = e => {
        // e.preventDefault();
        // dispatch({ type: LOADING });
        // API.savePost({
        //     title: titleRef.current.value,
        //     body: bodyRef.current.value,
        //     author: authorRef.current.value
        // })
        //     .then(result => {
        //         dispatch({
        //             type: ADD_POST,
        //             post: result.data
        //         });
        //     })
        //     .catch(err => console.log(err));

        // titleRef.current.value = "";
        // bodyRef.current.value = "";
    };
    return (
        <div>
            <div className="jumbotron">
                <img
                    className="img-fluid img-thumbnail"
                    alt="DEFINE TYPE HERE"
                    src="_blank"
                />
            </div>
            <h1>Create a post</h1>
            <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
                <input className="form-control mb-5" placeholder="Title" />
                <textarea className="form-control mb-5" placeholder="Body" />
                <input className="form-control mb-5" placeholder="Username" />
                <button className="btn btn-success mt-3 mb-5" type="submit">
                    Post
        </button>
            </form>
            <Container className="mt-4">
                <Col size="6">
                    <p>Forums Posts display here</p>
                </Col>
                <Col size="6">
                    <ul className=" ">
                        <li className="">
                            Forum Post 1
                        </li>
                        <li className=" ">
                            Forum Post 2
                        </li>
                        <li className=" ">
                            Forum Post 3
                        </li>
                        <li className=" ">
                            Forum Post 4
                        </li>
                        <li className=" ">
                            Forum Post 5
                        </li>
                        <li className=" ">
                            Forum Post 6
                        </li>
                    </ul>
                </Col>
            </Container>
        </div>
    );
}

//required ref={titleRef}, required ref={bodyRef}, ref={authorRef}, disabled={state.loading}

export default Forum;