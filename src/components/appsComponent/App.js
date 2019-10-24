import React from 'react';
import './App.css';
import ToDoList from '../toDoListComponent/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> TO DO List</h1>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
