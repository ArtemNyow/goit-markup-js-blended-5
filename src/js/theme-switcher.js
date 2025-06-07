import { refs } from './refs.js';
import { saveThemeToLS, loadThemeFromLS } from './local-storage-api.js';

export function initTheme() {
  const theme = loadThemeFromLS(); 
  refs.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');

}

export function toggleTheme() {
    refs.body.classList.toggle('theme-dark');
    refs.body.classList.toggle('theme-light');
    
    const currentTheme = refs.body.classList.contains('theme-dark') ? 'dark' : 'light';
    
  saveThemeToLS(currentTheme);
}
