import React, { Component } from 'react';
import "./ToDoList.css";
import ToDo from '../toDo/ToDo';
import NewToDo from '../newToDo/NewToDo';
import { connect } from 'react-redux';
import { getTodos, showNewToDoForm, deleteToDo, markToDoDone, getToDosStatusCount } from '../../actions/todoActions';
import PropTypes from 'prop-types'

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

    showNewToDoForm = () => {
        this.props.showNewToDoForm();
    }

    renderNewInput = () => {
        if(this.props.todo.showNewToDo){
            return<NewToDo addToDo={this.addToDo}/> 
        } else {
            return (
                <button 
                    className="add-button" 
                    onClick={this.showNewToDoForm}
                >
                    New To Do 
                </button>
            )
        }
    }
    
    getToDoComp = () => {
        const neweList = this.props.todo.toDoList.map((toDo) => {
            return (
                <ToDo 
                    key={`todo_${toDo.id}`}
                    name={`${toDo.name}`}
                    id={toDo.id}
                    targetDate = {toDo.targetDate}
                    checked={toDo.checked}
                    onChange={this.onChange.bind(this,toDo.id)}
                    deleteToDo={this.deleteToDo.bind(this,toDo.id)}
                    >
                </ToDo>
            )
        })

        return neweList;
    }

    render() {
        return (
            <div>
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
    showNewToDoForm: PropTypes.func.isRequired,
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
        showNewToDoForm,
        deleteToDo,
        markToDoDone,
        getToDosStatusCount
    }
)(ToDoList);
