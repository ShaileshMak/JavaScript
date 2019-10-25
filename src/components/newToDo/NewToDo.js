import React, { Component } from 'react';
import "./NewToDo.css";
import { connect } from 'react-redux';
import { addToDo } from '../../actions/todoActions';
import PropTypes from 'prop-types'

class NewToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoValue: '',
            targetDate: ''  
        }
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
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.onSubmit}>
                <div className="form-field-container">
                    <label>
                        <span className="label-span">To Do : </span>
                        <input className="toDo-input" type="text" name="toDoValue" onChange={this.onChange}/>
                    </label>
                </div>
                <div className="form-field-container">
                    <label>
                        <span className="label-span">Target Date : </span>
                        <input className="toDo-target-date" type="date" name="toDoDate" onChange={this.onChange}></input>
                    </label>
                </div>
                <button className="save-button" type="submit">Save</button>
            </form>
        )
    }
}

NewToDo.propTypes = {
    addToDo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, 
    { 
        addToDo
    }
)(NewToDo)
