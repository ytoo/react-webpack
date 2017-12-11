

import React from "react"
import ReactDOM from "react-dom"

import Bar from "../components/bar.js"
// Bar()

class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            xtitle:props.title,
            xname:props.name
        }
    }
    render(){
        return (
            <div>
               <h1>Title:{this.state.xtitle}</h1>
               <h2>Name:{this.state.xname}</h2>
            </div>
            
        )
    }
}

ReactDOM.render(
    <Comment title="你好" name="curry"></Comment>,
    document.getElementById("app")
)