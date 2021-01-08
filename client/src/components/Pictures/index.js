import React from 'react'

export default props => (
    <div className='fadein'>
        <img
            src={props.pics}
            alt=''
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