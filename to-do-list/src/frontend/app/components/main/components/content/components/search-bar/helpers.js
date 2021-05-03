import { fetchWithLoader } from "../../../../../base/helpers";
import { Row } from "../tasks/";

import styles from './styles.module.scss';

export function SearchBar() {
  const searchBarInput = document.createElement('input');
  searchBarInput.setAttribute('placeholder', 'Search...');

  searchBarInput.classList.add(styles.searchBarInput, 'form-control');
  
  const  debouncedSearch = debounce(search, 500);
  searchBarInput.addEventListener('keyup', debouncedSearch);

  return searchBarInput;
}

export function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args)
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


export function SearchBarInput() {
  const searchBarInput = document.createElement('input');

  searchBarInput.classList.add('searcg-bar-input');
  
  const  debouncedSearch = debounce(search, 500);
  searchBarInput.addEventListener('keyup', debouncedSearch);

  return searchBarInput;
}

function search(e) {
  const q = e.target.value;
  const fr = document.createDocumentFragment();
  const tBody = document.querySelector('tbody');
  tBody.innerHTML = '';
  fetchWithLoader(`http://localhost:3000/tasks?q=${q}`).then(res => res.json())
  .then(tasks => {
    tasks.forEach(task=> {
      fr.append(Row({
        id: task._id,
        description: task.description,
        title: task.title,
        deadline: task.deadline,
        status: task.status,
        isFinished: task.isFinished
      }))
        tBody.append(fr);
    });
  })
}  