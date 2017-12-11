

import React from "react"
import ReactDOM from "react-dom"

import Bar from "../components/bar.js"
// Bar()

function Comment(){
//    return Bar()
return (
    <h1>Hello World</h1>
)
}

ReactDOM.render(
    <Comment></Comment>,
    document.getElementById("app")
)