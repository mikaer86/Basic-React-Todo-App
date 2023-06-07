import TodoTask from './TodoTask';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='list'>
      {todos.length === 0 && 'You have no daily tasks!'}
      {todos.map((todo) => {
        return (
          <TodoTask
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
