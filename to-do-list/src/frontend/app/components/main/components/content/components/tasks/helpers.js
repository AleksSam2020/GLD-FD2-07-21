import { Button } from "../../../../../base/buttons";
import { fetchWithLoader } from "../../../../../base/helpers";
import { removeToast, Toast } from "../../../../../base/notification/component";
import { EditTask } from "../../../navigation/form-edit-task/component";

import './styles.module.scss';

export function Delete() {
  const btnDelete = Button({
    classList: 'btn btn-secondary',
    content: '',
    clickHandler: deleteTask
  });

  return btnDelete;
}

export function Edit() {
  const btnEdit = Button({
    classList: 'btn btn-secondary',
    content: '',
    clickHandler: EditTask
  });

  return btnEdit;
}

function deleteTask(e) {
  const taskId = e.target.dataset.id;
  $.confirm({
    title: 'Warning',
    content:`Do you want to delete this task?` ,
    type: 'dark',
    buttons: {
      yes: {
          btnClass: 'btn-dark',
          action: function() {
            fetchWithLoader(`http://localhost:3000/tasks/${taskId}`, {
              method: 'DELETE',
            }).then(res => res.json())
            .then(task => {
              document.querySelector(`tr[data-id="${taskId}"]`)?.remove();
              document.querySelector('#root').append(Toast('Deleted successfully')) ;
              removeToast();
            })
          }
      },
      no: { }
    }
  })
}

export function crossOver(e) {
  const id = e.target.dataset.id;
  const checkedInput = document.querySelector(`input[type="checkbox"][data-id = "${id}"]`);
  const row = document.querySelector(`tr[data-id = "${id}"]`);
  const status = document.querySelector( `tr[data-id = "${id}"] td:nth-child(5)`);
  const valueStatusAtr = status.attributes.value.value;

  if (this.checked) {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          status: 'done',
          isFinished: true
        }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json())
      .then(task => {
          if (task['$set'].isFinished) {
            status.textContent = 'done';
            task['$set'].status = status;
            row.classList.add('is-finished');
          } else {
            row.classList.remove('is-finished');
          }
        }
      )
  } else {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          status: valueStatusAtr,
          isFinished: false
        }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json())
      .then(task => {
          if (!task['$set'].isFinished) {
            status.textContent = valueStatusAtr;
            task['$set'].status = valueStatusAtr;
            row.classList.remove('is-finished');
          } else {
            row.classList.add('is-finished');
          }
        }
      )
  }
}