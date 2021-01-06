import React from 'react'

export default props =>
    <div className='button'>
        <input type='file' id='single' onChange={props.onChange} />
    </div>

// import React from 'react'

// function Buttons(props) {
//     console.log("test Buttons")
//     return (

//         <div className='button'>
//             <input type='file' onChange={props.onChange} />
//         </div>
//     )
// }
// export default Buttons;