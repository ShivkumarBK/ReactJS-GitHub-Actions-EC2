// Class based component

import React,{Component} from "react";
class Welcome extends Component{
    render(){
        const {name,role}=this.props
        return <h1>Hello {name} is {role}</h1>
    }
}
export default Welcome;