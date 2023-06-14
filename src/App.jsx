import './App.css';
import { useEffect, useState } from 'react';
import TodoPrompt from './components/TodoPrompt';
import TodoList from './components/TodoList';
import DarkThemeBtn from './components/DarkThemeBtn';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('item');
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const [clicked, setClicked] = useState(false);

  const handleIconToggle = (e) => {
    setClicked(!clicked);
  };

  return (
    <div className={`App ${!clicked ? 'App_active' : 'App'}`}>
      <DarkThemeBtn handleIconToggle={handleIconToggle} />
      <TodoPrompt onSubmit={addTodo} />
      <h1 className='headTitle'>Goals</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
