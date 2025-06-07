import { refs } from './js/refs.js';
import { taskManager } from './js/tasks.js';
import { renderTasks, handleDelete } from './js/render-tasks.js';
import { loadTasksFromLS, saveTasksToLS } from './js/local-storage-api.js';
import { initTheme, toggleTheme } from './js/theme-switcher.js';

  
  initTheme();

  const savedTasks = loadTasksFromLS();
  taskManager.set(savedTasks);

  renderTasks();


refs.form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = refs.inputTitle.value.trim();
  const text = refs.inputDesc.value.trim();

  if (!title || !text) return;

  const newTask = {
    id: Date.now().toString(),
    title,
    text,
  };

  taskManager.add(newTask);
  saveTasksToLS(taskManager.getAll());
  renderTasks();
  refs.form.reset();
});

refs.taskList.addEventListener('click', handleDelete);

refs.themeToggle.addEventListener('click', toggleTheme);
