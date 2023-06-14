const TodoTask = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className='taskItem'>
      <input
        className='checkTask'
        id={title}
        name='title'
        type='checkbox'
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label className='taskLabel'> {title} </label>
      <button className='btn-btn-danger' onClick={() => deleteTodo(id)}>
        🗑
      </button>
    </li>
  );
};

export default TodoTask;
