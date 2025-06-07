const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export const saveTasksToLS = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLS = () => {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
};

export const saveThemeToLS = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

export const loadThemeFromLS = () => {
  return localStorage.getItem(THEME_KEY) || 'light';
};
