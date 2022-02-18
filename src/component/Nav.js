import React,{Component} from "react";
import { Link } from "react-router-dom";

class Nav extends Component{
    render(){
        return(
            <div>
                <li>
                <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </div>
        )
    }

}
export default Nav