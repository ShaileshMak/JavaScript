import React, { Component } from 'react';
import "./ToDoList.css";
import ToDo from '../toDo/ToDo';
import AddEditToDo from '../addEditToDo/AddEditToDo';
import { connect } from 'react-redux';
import { getTodos, showNewToDoForm, deleteToDo, editToDo, markToDoDone, getToDosStatusCount } from '../../actions/todoActions';
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

    editToDo = (id) => {
        this.props.editToDo(id);
    }

    showNewToDoForm = () => {
        this.props.showNewToDoForm();
    }

    renderNewInput = () => {
        if(this.props.todo.showNewToDo || this.props.todo.showEditToDo){
            return<AddEditToDo addToDo={this.addToDo}/> 
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
                    editToDo={this.editToDo.bind(this,toDo.id)}
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
    editToDo: PropTypes.func.isRequired,
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
        editToDo,
        markToDoDone,
        getToDosStatusCount
    }
)(ToDoList);
