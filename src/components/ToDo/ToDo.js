import React, { Component } from 'react';
import "./ToDo.css"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

class ToDo extends Component {

    isToDoDoneClass = () => {
        let classes = "toDo-label"  + (this.props.checked ? ' toDo-done' : '')
        classes = this.isPastDue() ? `${classes} over-due-todo` : classes;
        return classes
    }

    isPastDue = () => {
        if(this.props.checked) {
            return false;
        }
        const targetDate = new Date(this.props.targetDate);
        const today = new Date();
        today.setDate(today.getDate() - 1);

        return targetDate < today;
    }

    render() {
        return (
            <div className="toDo-container">
                <div>
                    <label>
                        <input className="toDo-checkbox" type="checkbox" name={`toDo_${this.props.id}`} checked={this.props.checked} onChange={() => this.props.onChange(this.props.id)} />
                        <span className={this.isToDoDoneClass()}>{this.props.name}</span>
                    </label>
                    <span className={`target-date ${this.isPastDue() ? ' over-due-todo' : ''}`}>{`(Target Date:- ${this.props.targetDate} ${this.isPastDue() ? ' [OVER DUE...] ' : ''})`}</span>
                </div>
                <div>
                    <button className="delete-button" onClick={() => this.props.deleteToDo(this.props.id)}>Delete</button>
                    <Link to={`/editToDo/${this.props.id}`} className="btn edit-button">Edit</Link>
                </div>
            </div>
        )
    }
}
ToDo.propTypes = {
    todo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps)(ToDo)
