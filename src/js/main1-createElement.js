

import React from "react"
import ReactDOM from "react-dom"

var Comment = React.createElement("h1",{
    "title":"haha"
},"hello react")

ReactDOM.render(
    Comment,
    document.getElementById("app")
)