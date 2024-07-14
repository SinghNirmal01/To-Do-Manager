document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.getElementById('todo-list');
  const addTodoBtn = document.getElementById('add-todo-btn');
  const newTodoInput = document.getElementById('new-todo-input');
  const editModal = document.getElementById('editModal');
  const closeModalBtn = document.querySelector('.close');
  const saveTodoBtn = document.getElementById('save-todo-btn');
  const editTodoInput = document.getElementById('edit-todo-input');
  let currentEditIndex = null;

  // Load todos from local storage
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('project-item');

      todoItem.innerHTML = `
        <input type="checkbox" ${todo.checked ? 'checked' : ''} data-index="${index}" class="check-todo">
        <span class="${todo.checked ? 'checked' : ''}">${todo.text}</span>
        <div class="btn-container">
          <button class="btn edit-todo" data-index="${index}">Edit</button>
          <button class="btn delete-todo" data-index="${index}">Delete</button>
        </div>
      `;

      todoList.appendChild(todoItem);
    });
  }

  function addTodo() {
    const todoText = newTodoInput.value.trim();
    if (todoText !== '') {
      todos.push({ text: todoText, checked: false });
      newTodoInput.value = '';
      updateLocalStorage();
      renderTodos();
    }
  }

  function updateTodo(index, newText) {
    todos[index].text = newText;
    updateLocalStorage();
    renderTodos();
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    updateLocalStorage();
    renderTodos();
  }

  function toggleCheck(index) {
    todos[index].checked = !todos[index].checked;
    updateLocalStorage();
    renderTodos();
  }

  function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-todo')) {
      const index = e.target.dataset.index;
      deleteTodo(index);
    } else if (e.target.classList.contains('edit-todo')) {
      const index = e.target.dataset.index;
      currentEditIndex = index;
      editTodoInput.value = todos[index].text;
      editModal.style.display = 'block';
    } else if (e.target.classList.contains('check-todo')) {
      const index = e.target.dataset.index;
      toggleCheck(index);
    }
  });

  addTodoBtn.addEventListener('click', addTodo);
  closeModalBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == editModal) {
      editModal.style.display = 'none';
    }
  });

  saveTodoBtn.addEventListener('click', () => {
    const newText = editTodoInput.value.trim();
    if (newText !== '') {
      updateTodo(currentEditIndex, newText);
      editModal.style.display = 'none';
    }
  });

  renderTodos();
});

function setTheme(themeName) {
  document.documentElement.className = themeName;
}