const taskForm = document.getElementById('formulario-tarea');
const taskInput = document.getElementById('tarea');
const taskList = document.getElementById('lista');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = taskInput.value;

  if (taskText !== "") {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="complete">agregada con exito</button>
      <button class="delete">Eliminar tarea</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";

    taskItem.querySelector('.complete').addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.delete').addEventListener('click', function() {
      taskItem.remove();
    });
  }
});
