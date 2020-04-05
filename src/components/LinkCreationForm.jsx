import React, { Component } from 'react';
import '../App.css'



class LinkCreationForm extends Component {
    state = { 
        linkName : "",
        linkSrc : ""
     }

    
    createCard = e => {
        e.preventDefault();
        this.props.addNewCard(this.state.linkName, this.state.linkSrc)
    }

    linkNameChanged = e => {
        const {value} = e.target
        this.setState({
            linkName : value
        })
    }

    linkSrcChanged = e => {
        const {value} = e.target
        this.setState({
            linkSrc : value
        })
    }

    render() { 
     
        const formStyle = {
            width: "40%",
            margin: "20px"
        };
    
        const inputStyle = {
            marginLeft: "50px"
        }
        return (
            <div className="card" style={formStyle}>
                <form onSubmit = {this.createCard}>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label htmlFor="linkName">Name</label>
                            <input className="form-control" onChange = {this.linkNameChanged}style={inputStyle} id="linkName"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <label htmlFor="linkSrc">Link</label>
                            <input className="form-control" onChange = {this.linkSrcChanged} style={inputStyle} id="linkSrc"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type = "submit" className = "btn btn-success" id="inputPassword"> Create </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default LinkCreationForm;