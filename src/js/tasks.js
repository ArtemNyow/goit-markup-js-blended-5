let tasks = [];

export const taskManager = {
  getAll: () => tasks,
  add: (task) => tasks.push(task),
  remove: (id) => {
    tasks = tasks.filter(task => task.id !== id);
  },
  set: (newTasks) => {
    tasks = newTasks;
  },
};
