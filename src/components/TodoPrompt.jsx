import { useState } from 'react';

const TodoPrompt = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='mainForm'>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          className='taskInput'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          id='item'
        />
      </div>
      <button className='btn'>Add Task</button>
    </form>
  );
};

export default TodoPrompt;
