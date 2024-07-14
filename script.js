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
    if (todoText === 'Red') {
      setTheme('red-theme');
    }
    if (todoText === 'Green') {
      setTheme('green-theme');
    }
    if (todoText === 'Blue') {
      setTheme('blue-theme');
    }
    if (todoText === 'Purple') {
      setTheme('purple-theme');
    }
    if (todoText === 'Orange') {
      setTheme('orange-theme');
    }
    if (todoText === 'Pink') {
      setTheme('pink-theme');
    }
    if (todoText === 'Teal') {
      setTheme('teal-theme');
    }
    if (todoText === 'Yellow') {
      setTheme('yellow-theme');
    }
    if (todoText === 'Indigo') {
      setTheme('indigo-theme');
    }
    if (todoText === 'Brown') {
      setTheme('brown-theme');
    }
    if (todoText === 'Light Blue') {
      setTheme('light-blue-theme');
    }
    if (todoText === 'Dark Blue') {
      setTheme('dark-blue-theme');
    }
    if (todoText === 'Light Green') {
      setTheme('light-green-theme');
    }
    if (todoText === 'Dark Green') {
      setTheme('dark-green-theme');
    }
    if (todoText === 'Light Red') {
      setTheme('light-red-theme');
    }
    if (todoText === 'Dark Red') {
      setTheme('dark-red-theme');
    }
    if (todoText === 'Light Purple') {
      setTheme('light-purple-theme');
    }
    if (todoText === 'Dark Purple') {
      setTheme('dark-purple-theme');
    }
    if (todoText === 'Light Orange') {
      setTheme('light-orange-theme');
    }
    if (todoText === 'Dark Orange') {
      setTheme('dark-orange-theme');
    }
    if (todoText === 'Light Teal') {
      setTheme('light-teal-theme');
    }
    if (todoText === 'Dark Teal') {
      setTheme('dark-teal-theme');
    }
    if (todoText === 'Light Pink') {
      setTheme('light-pink-theme');
    }
    if (todoText === 'Dark Pink') {
      setTheme('dark-pink-theme');
    }
    if (todoText === 'Light Yellow') {
      setTheme('light-yellow-theme');
    }
    if (todoText === 'Dark Yellow') {
      setTheme('dark-yellow-theme');
    }
    if (todoText === 'Light Indigo') {
      setTheme('light-indigo-theme');
    }
    if (todoText === 'Dark Indigo') {
      setTheme('dark-indigo-theme');
    }
    if (todoText === 'Light Brown') {
      setTheme('light-brown-theme');
    }
    if (todoText === 'Dark Brown') {
      setTheme('dark-brown-theme');
    }
    if(todoText === 'Black'){
  setTheme('black-theme');
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

// Function to set the theme
function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem('theme', themeName);  // Save the selected theme in localStorage
}

// Function to load the theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');  // Get the saved theme from localStorage
  if (savedTheme) {
    setTheme(savedTheme);  // Apply the saved theme
  } else {
    setTheme('orange-theme');  // Default theme if no theme is saved
  }
}

// Call loadTheme on page load to apply the saved theme
loadTheme();