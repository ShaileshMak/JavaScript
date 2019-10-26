import React, { Component } from 'react'
import './ToDoStatusCount.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { statusKeys } from '../../utilities/constants'
import { getToDosStatusCount, showToDosStatusCount } from '../../actions/todoActions';

class ToDoStatusCount extends Component {
    componentDidMount() {
        this.props.getToDosStatusCount();
    }

    handleClick = () => {
        this.props.showToDosStatusCount()
    }
    
    renderToDoStatusCount = ()=> {
        const toDoStatusCount = this.props.todo.toDoStatusCount;
        const neweList = Object.keys(toDoStatusCount).map((key) => {
            return <li key={uuid()} className={`status status-${key}`}> {`${statusKeys[key]} : ${toDoStatusCount[key]}`}</li>
        })

        return this.props.todo.showStatus ? (<ul>{neweList}</ul>) : '';
    }

    render() {
        return (
            <div className={this.props.className}>
                <button className="show-hide-button"onClick={this.handleClick}>{`${!this.props.todo.showStatus? 'Show status' : 'Hide status'}`}</button>
                {this.renderToDoStatusCount()}
            </div>
        )
    }
};

ToDoStatusCount.propTypes = {
    getToDosStatusCount: PropTypes.func.isRequired,
    showToDosStatusCount: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    todo: state.todo
});

export default connect(mapStateToProps, { getToDosStatusCount, showToDosStatusCount })(ToDoStatusCount);
