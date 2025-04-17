import React from 'react';  // Make sure React is imported
import './styles.css';  // Importing styles
import TodoList from './components/TodoList';  // Import TodoList component

function App() {
  return (
    <div className="App">
      <TodoList /> {/* Self-closing tag for TodoList */}
    </div>
  );
}

export default App;
