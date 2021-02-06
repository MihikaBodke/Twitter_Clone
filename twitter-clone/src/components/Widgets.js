import React, { Component } from 'react'
import "../css/Widgets.css"
export class Widgets extends Component {
    state = {
        users:[],
    }
    render() {
        return (
            <div className="Widgets">
                <h4 style={{"font-weight":"900"}}>You might want to follow</h4>
            </div>
        )
    }
}

export default Widgets
