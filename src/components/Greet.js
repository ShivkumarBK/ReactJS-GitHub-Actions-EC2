//Functional component

import React from "react";
// const Greet = (props) => {
// return (<div>
//     <h1>Hello {props.name} is {props.role}</h1>
//     {props.children}
//     </div>)
// }

const Greet = ({name,role}) => {
    return (<div>
        <h1>Hello {name} is {role}</h1>
        </div>)
    }


export default Greet; 