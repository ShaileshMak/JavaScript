import React from 'react';
import './App.css';
import ToDoList from '../toDoListComponent/ToDoList';
import { Provider } from 'react-redux';
import store from '../../store'
import ToDoStatusCount from '../toDoStatusCount/ToDoStatusCount';
import Filters from '../filters/Filters';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> TO DO List</h1>
          <div className="header">
            <ToDoStatusCount className="todo-status"/>
            <Filters className="filters"/>
          </div>
          <ToDoList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
