import React, { Component } from 'react';
import ToDoStatusCount from '../toDoStatusCount/ToDoStatusCount';
import Filters from '../filters/Filters';
import ToDo from '../toDo/ToDo';
import { connect } from 'react-redux';
import { utilities } from '../../utilities/utils';
import { filterNames } from '../../utilities/constants';
import { getTodos, deleteToDo, markToDoDone, getToDosStatusCount } from '../../actions/todoActions';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

class ToDoList extends Component {
    
    componentDidMount() {
        this.props.getTodos();
    }

    onChange = (id) => {
        this.props.markToDoDone(id);
        this.props.getToDosStatusCount();
    }

    deleteToDo = (id) => {
        this.props.deleteToDo(id);
        this.props.getToDosStatusCount();
    }

    getFilteredToDo = () => {
        let newToDoList = this.props.todo.toDoList;
        const selectedFilterValue = this.props.todo.selectedFilterValue
        if(selectedFilterValue === filterNames.COMPLETED) {
            newToDoList = newToDoList.filter(toDo => toDo.checked)
        } else if(selectedFilterValue === filterNames.PENDING) {
            newToDoList = newToDoList.filter(toDo => !toDo.checked)
        } else if(selectedFilterValue === filterNames.PAST_DUES) {
            newToDoList = newToDoList.filter(toDo => utilities.isPastDueToDo(toDo))
        }
        return newToDoList;
    }

    renderNewInput = () => {
        if(!this.props.todo.showNewToDo) {
            return (
                <Link to="/addToDo" className="btn">New To Do </Link>
            )
        }
    }
    
    getToDoComp = () => {
        const neweList = this.getFilteredToDo().map((toDo) => {
            return (
                <ToDo 
                    key={`todo_${toDo.id}`}
                    name={`${toDo.name}`}
                    id={toDo.id}
                    targetDate = {toDo.targetDate}
                    checked={toDo.checked}
                    onChange={this.onChange.bind(this,toDo.id)}
                    deleteToDo={this.deleteToDo.bind(this,toDo.id)}
                />
            )
        })

        return neweList;
    }

    render() {
        return (
            <div>
                <div className="header">
                    <ToDoStatusCount className="todo-status"/>
                    <Filters className="filters"/>
            </div>
                <ol>
                    {this.getToDoComp()}
                </ol>
                {this.renderNewInput()}
            </div>
        )
    }
};

ToDoList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    markToDoDone: PropTypes.func.isRequired,
    getToDosStatusCount: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    todo: state.todo
});

export default connect(
    mapStateToProps, 
    { 
        getTodos,  
        deleteToDo,
        markToDoDone,
        getToDosStatusCount
    }
)(ToDoList);
