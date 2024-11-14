document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const taskText = todoInput.value.trim();
    if (taskText) {
      const listItem = document.createElement('li');
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-button';
      removeButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
      });
      listItem.appendChild(taskSpan);
      listItem.appendChild(removeButton);
      todoList.appendChild(listItem);
      todoInput.value = '';
    }
  });  