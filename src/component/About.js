import React,{Component} from "react";
class About extends Component{
    render(){
        return( <div>
            <h2>About Component</h2>
            <p>
                React is a libray. it is not a framework for routing the
                component it depends on other 3rd party tools.
                 For routing the components in application App.js we write
                 "BrowserRouter,Route tags"</p>
        </div>)
    }
}
export default About