import React from "react";
import './myStyles.css'
// function Stylesheet(){
//     return(
//         <div>
//             <h1 className='primary'>Stylesheets</h1>
//         </div>
//     )
// }
function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h3>General css file</h3>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>

    </div>
  )
}
export default Stylesheet