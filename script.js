function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      const taskText = document.createTextNode(taskInput.value);
      li.appendChild(taskText);
  
      const deleteButton = document.createElement('button');
      deleteButton.appendChild(document.createTextNode('Delete'));
      deleteButton.onclick = function () {
        taskList.removeChild(li);
      };
      li.appendChild(deleteButton);
  
      taskList.appendChild(li);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  