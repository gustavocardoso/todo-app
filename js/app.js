(function() {
  const todoListContainer = document.querySelector('#todos-container');
  const doneTodoListContainer = document.querySelector('#done-todos-container');
  const formTodo = document.querySelector('#form-todo');
  const newTodoText = document.querySelector('#new-todo');
  const addIcon = document.querySelector('#icon-add');

  let todos = [];

  formTodo.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTodo = { text: newTodoText.value, status: false };

    todos.push(newTodo);
    newTodoText.value = '';
  }, false);
})();
