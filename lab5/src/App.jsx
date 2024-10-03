import React from 'react';
import './App.css';
import ToDoContainer from "./components/ToDoCOntainer";

function App() {
  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <ToDoContainer />
    </div>
  );
}

export default App;