import React, { Component } from 'react';
import "./NewToDo.css";
import { connect } from 'react-redux';
import { addToDo, getToDosStatusCount } from '../../actions/todoActions';
import PropTypes from 'prop-types'

class NewToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoValue: '',
            targetDate: this.getDate() 
        }
    }
    
    getDate = (date = new Date()) => {
        let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0]
        return dateString;    
    }

    onChange = (event) => {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) =>  {
        event.preventDefault();
        const toDoData = {
            toDoValue: this.state.toDoValue,
            targetDate: this.state.targetDate,
        };
        this.props.addToDo(toDoData);
        this.props.getToDosStatusCount();
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.onSubmit}>
                <div className="form-field-container">
                    <label>
                        <span className="label-span">To Do : </span>
                        <input className="toDo-input" type="text" name="toDoValue" onChange={this.onChange} value={this.state.toDoValue} />
                    </label>
                </div>
                <div className="form-field-container">
                    <label>
                        <span className="label-span">Target Date : </span>
                        <input className="toDo-target-date" type="date" name="targetDate" onChange={this.onChange} value={this.state.targetDate}></input>
                    </label>
                </div>
                <button className="save-button" type="submit">Save</button>
            </form>
        )
    }
}

NewToDo.propTypes = {
    addToDo: PropTypes.func.isRequired,
    getToDosStatusCount: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, 
    { 
        addToDo,
        getToDosStatusCount
    }
)(NewToDo)
