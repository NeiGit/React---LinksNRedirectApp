import React, { Component } from 'react'
import '../App.css'

//this.props.[reference]

class LinkCard extends Component {
    render() {
        return(
            <div className = "col-md-4">
                <div className = "col mt-4">
                    <div className = "card-header">
                        <h3>{this.props.title}</h3>
                        <a className = "badge badge-pill badge-danger" href = {this.props.link} target="_blank" rel="noopener noreferrer"> Go! </a>
                    </div>
                </div>   
            </div>
        )
    }
}

export default LinkCard
