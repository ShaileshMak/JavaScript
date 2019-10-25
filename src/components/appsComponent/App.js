import React from 'react';
import './App.css';
import ToDoList from '../toDoListComponent/ToDoList';
import { Provider } from 'react-redux';
import store from '../../store'
import ToDoStatusCount from '../toDoStatusCount/ToDoStatusCount';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> TO DO List</h1>
          <ToDoStatusCount />
          <ToDoList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
