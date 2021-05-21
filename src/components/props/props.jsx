

import React from 'react'

export default function Props(props){

return(
     <div>
         <h3>{props.user.name}, Hobbies: </h3>
         <ul style={{listStyle:'none'}}>
             {props.user.hobbies.map((hobby,i) =>  <li key={i}>{hobby}</li>
             )}
         </ul>
         <hr/>
         {props.children}
     </div>
);
}

// Props.propTypes = {
//     user : { 
//         name : React.PropTypes.string ,
//         hobbies : React.PropTypes.array
//     },
//    children : React.PropTypes.element.isRequired
//
// }