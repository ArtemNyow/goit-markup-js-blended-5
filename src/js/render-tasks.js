import { refs } from './refs.js';
import { taskManager } from './tasks.js';
import { saveTasksToLS } from './local-storage-api.js';
import { createTaskMarkup } from './markup-tasks.js';



export function renderTasks() {
    refs.taskList.innerHTML = '';
    const tasks = taskManager.getAll();
    tasks.forEach(task => {
      const li = createTaskMarkup(task);
      refs.taskList.appendChild(li);
    });
  }
  
  export function handleDelete(e) {
    if (!e.target.classList.contains('task-list-item-btn')) return;
  
    const id = e.target.dataset.id;
    taskManager.remove(id);
    saveTasksToLS(taskManager.getAll());
    renderTasks();
  }