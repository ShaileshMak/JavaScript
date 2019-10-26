import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../store';

import ToDoList from '../toDoList/ToDoList';
import AddEditToDo from '../addEditToDo/AddEditToDo';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1> TO DO List</h1>
          <Router>
            <Route exact path="/" component={ToDoList} />
            <Route exact path="/addToDo" component={AddEditToDo} />
            <Route exact path="/editToDo/:id" component={AddEditToDo} />
          </Router>
        </header>
      </div>
    </Provider>
  );
}

export default App;
