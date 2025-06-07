export function createTaskMarkup({ id, title, text }) {
  const li = document.createElement('li');
  li.classList.add('task-list-item');
  li.innerHTML = `
    <button class="task-list-item-btn" data-id="${id}">Delete</button>
    <h3>${title}</h3>
    <p>${text}</p>
  `;
  return li;
}