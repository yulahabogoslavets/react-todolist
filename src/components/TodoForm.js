import React from "react";
import {v4 as uuidv4} from "uuid";
import "../App.css";


export default class TodoForm extends React.Component{
    state = {
        text: ""
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })

    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: uuidv4(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        })
    };

    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <input
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="todo..."
                    />
                    <button className="btn" onClick={this.handleSubmit}>add</button>
                </form>
            </React.Fragment>
        );
    }
}