(function() {
  const todoListContainer = document.querySelector('#todos-container');
  const doneTodoListContainer = document.querySelector('#done-todos-container');
  const formTodo = document.querySelector('#form-todo');
  const newTodoText = document.querySelector('#new-todo');
  const addIcon = document.querySelector('#icon-add');

  let todos = [];

  newTodoText.addEventListener('keyup', function(event) {
    const lettersCount = event.target.value.length;

    if (lettersCount >= 4) {
      addIcon.classList.add('active');
    } else {
      addIcon.classList.remove('active');
    }
  }, false);

  formTodo.addEventListener('submit', function(event) {
    event.preventDefault();

    if (newTodoText.value.length >= 4) {
      addTodo();
    }
  }, false);

  function addTodo() {
    if (newTodoText.value !== '') {
      const newTodo = { text: newTodoText.value, status: false };

      todos.push(newTodo);
      newTodoText.value = '';

      renderTodos();
    }
  }

  function renderTodos() {
    newTodoList();
    doneTodoList();
  }

  function setTodoDone() {
    const index = this.dataset.index;
    todos[index].status = true;
    renderTodos();
  }

  function setTodoUndone() {
    const index = this.dataset.index;
    todos[index].status = false;
    renderTodos();
  }

  function newTodoList() {
    const oldList = document.querySelector('#todos');
    const listSize = todos.length;
    const docFrag = document.createDocumentFragment();
    const todoList = document.createElement('ul');
    let showList = false;

    docFrag.appendChild(todoList);

    todoList.setAttribute('id', 'todos');

    if(oldList !== null) {
      oldList.remove();
    }

    for(let index = 0; index < listSize; index++) {
      if (todos[index].status === false) {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.setAttribute('data-index', index);
        itemLink.setAttribute('href', '#');
        itemLink.classList.add('item-link')

        itemLink.innerHTML = todos[index].text;

        itemLink.addEventListener('click', setTodoDone, false);

        listItem.appendChild(itemLink);
        todoList.appendChild(listItem);
        showList = true;
      }
    }

    if (showList) {
      todoListContainer.appendChild(docFrag);
      todoListContainer.classList.remove('hide-list');
      todoListContainer.classList.add('show-list');
    }
  }

  function doneTodoList() {
    const oldList = document.querySelector('#done-todos');
    const listSize = todos.length;
    const docFrag = document.createDocumentFragment();
    const todoList = document.createElement('ul');
    let showList = false;

    docFrag.appendChild(todoList);

    todoList.setAttribute('id', 'done-todos');

    if(oldList !== null) {
      oldList.remove();
    }

    for(let index = 0; index < listSize; index++) {
      if (todos[index].status === true) {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.setAttribute('data-index', index);
        itemLink.setAttribute('href', '#');
        itemLink.classList.add('item-link')

        itemLink.innerHTML = todos[index].text;

        itemLink.addEventListener('click', setTodoUndone, false);

        listItem.appendChild(itemLink);
        todoList.appendChild(listItem);
        showList = true;
      }
    }

    if (showList) {
      doneTodoListContainer.appendChild(docFrag);
      doneTodoListContainer.classList.remove('hide-list');
      doneTodoListContainer.classList.add('show-list');
    }
  }
})();
