import React, { Component } from 'react';
import "./ToDoList.css";
import ToDo from '../toDo/ToDo';
import NewToDo from '../newToDo/NewToDo';

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoList: [
                {name: 'Todo 1', index: 0, targetDate: '2019-10-30', checked: false},
                {name: 'Todo 2', index: 1, targetDate: '2019-10-31', checked: true},
                {name: 'Todo 3', index: 2, targetDate: '2019-10-28', checked: true},
                {name: 'Todo 4', index: 3, targetDate: '2019-11-2', checked: false}
            ],
            showNewToDo: false
        }
    }

    addToDo = (toDoData) => {
        const newToDoList = this.state.toDoList;
        const length = newToDoList.length;
        newToDoList.push({
            name: toDoData.toDoValue,
            targetDate: toDoData.targetDate,
            index: length,
            checked: false,
        });

        this.setState({
            toDoList: newToDoList,
            showNewToDo: false
        })
    }

    onChange = (selectedIndex) => {
        const newToDoList = this.state.toDoList.map((todo, index) => ({...todo, checked: selectedIndex === index ? !todo.checked : todo.checked }));
        this.setState({
            toDoList: newToDoList
        })
    }

    deleteToDo = (index) => {
        const newToDoList = this.state.toDoList.filter(toDo => toDo.index !== index);
        this.setState({
            toDoList: newToDoList
        })
    }

    showNewToDoForm = () => {
        this.setState({showNewToDo: true});
    }

    renderNewInput = () => {
        if(this.state.showNewToDo){
            return<NewToDo addToDo={this.addToDo}/> 
        } else {
            return (
                <button 
                    className="add-button" 
                    onClick={this.showNewToDoForm}
                >
                    Add To Do 
                </button>
            )
        }
    }
    
    getToDoComp = () => {
        const neweList = this.state.toDoList.map((toDo, index) => {
            return (
                <ToDo 
                    key={`todo_${toDo.index}`}
                    name={toDo.name}
                    index={toDo.index}
                    targetDate = {toDo.targetDate}
                    checked={toDo.checked}
                    onChange={this.onChange}
                    deleteToDo={this.deleteToDo}
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
}

export default ToDoList
