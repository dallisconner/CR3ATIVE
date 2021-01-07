import React, { useState } from "react";
import Pictures from '../components/Pictures'
import Buttons from '../components/Buttons'
const API_URL = 'http://localhost:3001';

const ImageUpload = () => {

    const [pics, setPics] = useState([]);

    const onChange = e => {
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
            .then(pics => {
                console.log("test then test_1")
                console.log(pics)
                setPics(pics)
            })
            .catch(err => {
                err.json().then(e => {
                    console.log("test catch error")
                })
            })
    }

    return (
        <div>
            <Pictures pics={pics} />
            <Buttons onChange={onChange} />
        </div>
    )

}
export default ImageUpload;