import React, { Component } from 'react';
import "./ToDoList.css";
import ToDo from '../ToDo/ToDo';
import NewToDo from '../newToDo/NewToDo';

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoList: [],
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
