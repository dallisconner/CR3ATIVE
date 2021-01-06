import Images from '../components/Images'
import Buttons from '../components/Buttons'
import React, { useState } from "react";

const API_URL = 'http://localhost:3000';

const ImageUpload = () => {

    const [images, setImages] = useState([]);

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
                if (!res.ok) {
                    throw res
                }
                return res.json()
            })
            .then(images => {
                setImages({
                    images
                })
            })
            .catch(err => {
                err.json().then(e => {

                })
            })
    }

    return (
        <div>
            <Images images={images} />
            <Buttons onChange={onChange} />
        </div>
    )
}
export default ImageUpload;