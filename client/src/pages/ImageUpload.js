import React, { Component } from 'react'
import Pictures from '../components/Pictures'
import Buttons from '../components/Buttons'
// import { API_URL } from './config'
const API_URL = 'http://localhost:3001';

export default class ImageUpload extends Component
// const App = () => 
{

    state = {
        test_3: []
    }

    onChange = e => {
        const files = Array.from(e.target.files)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        fetch(`${API_URL}/image-upload`, {
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
            .then(test_3 => {
                console.log("test then test_1")
                this.setState({
                    test_3
                })
            })
            .catch(err => {
                err.json().then(e => {
                    console.log("test catch error")
                })
            })
    }

    render() {
        const { test_3 } = this.state

        return (
            <div>
                <Pictures test_3={test_3} />
                <Buttons onChange={this.onChange} />
            </div>
        )
    }
}
// export default Application;