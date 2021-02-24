import React, { Component } from 'react'
import { connect } from 'react-redux'

class Postform extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,message,editing:false
        }

        // console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getTitle.value = ""
        this.getMessage.value = ""
    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getTitle = input} placeholder="...." required/>
                    <br/>
                    <textarea cols="30" ref={(input) => this.getMessage = input}  rows="5" placeholder="..." required/>
                    <button>POST</button>
                </form>
            </div>
        )
    }
}

export default connect()(Postform)
