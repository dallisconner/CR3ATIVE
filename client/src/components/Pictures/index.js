import React from 'react'

export default props =>

    props.test_3.map((image, i) =>
        < div key={i} className='fadein' >
            <img
                src={image.secure_url}
                alt=''
                onError={() => props.onError(image.public_id)}
            />
        </div >
    )
console.log("test Images")

// import React from 'react'

// function Images(props) {
//     console.log("test Images")
//     return (
//         props.pictures.map((image, i) =>
//             <div key={i}>testImage
//                 <img
//                     src={image.secure_url}
//                     alt=''
//                 />testImage
//             </div>
//         )
//     )
// }
// export default Images;