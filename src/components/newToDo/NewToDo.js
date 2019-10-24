import React, { Component } from 'react';
import "./NewToDo.css";

class NewToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoValue: '',
            targetDate: ''  
        }
    }

    handleToDoChange = (event) => {
        this.setState( {
            toDoValue: event.target.value
        })
    }

    handleToDoTargetDateChange = (event) => {
        this.setState( {
            targetDate: event.target.value
        })
    }

    handleSaveClick = (event) =>  {
        event.preventDefault();
        this.props.addToDo( {
            toDoValue: this.state.toDoValue,
            targetDate: this.state.targetDate,
        })
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSaveClick}>
                <div className="form-field-container">
                    <label>
                        <span class="label-span">To Do : </span>
                        <input className="toDo-input" type="text" name="newToDo" onChange={this.handleToDoChange}/>
                    </label>
                </div>
                <div className="form-field-container">
                    <label>
                        <span class="label-span">Target Date : </span>
                        <input className="toDo-target-date" type="date" onChange={this.handleToDoTargetDateChange}></input>
                    </label>
                </div>
                <button className="save-button" type="submit">Save</button>
            </form>
        )
    }
}

export default NewToDo
