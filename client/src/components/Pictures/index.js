import React from 'react'

export default props =>
    props.pics.map((image, i) =>
        <div key={i} className='fadein'>
            <img
                src={image.secure_url}
                alt=''
                onError={() => props.onError(image.public_id)}
            />
        </div>
    )

// import React from 'react'

// function Images(props) {
//   return (
//     props.images.map((image, i) =>
//       <div key={i}>
//         <img
//           src={image.secure_url}
//           alt=''
//         />
//       </div>
//     )
//   )
// }
// export default ;