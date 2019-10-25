import React, { Component } from 'react';
import "./ToDo.css"

class ToDo extends Component {

    isToDoDoneClass = () => {
        return "toDo-label"  + (this.props.checked ? ' toDo-done' : '')
    }

    render() {
        return (
            <div className="toDo-container">
                <div>
                    <label>
                        <input className="toDo-checkbox" type="checkbox" name={`toDo_${this.props.index}`} checked={this.props.checked} onChange={() => this.props.onChange(this.props.index)} />
                        <span className={this.isToDoDoneClass()}>{this.props.name}</span>
                    </label>
                    <span className="target-date">{`(Target Date:- ${this.props.targetDate})`}</span>
                </div>
                <div>
                    <button className="delete-button" onClick={() => this.props.deleteToDo(this.props.index)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default ToDo
