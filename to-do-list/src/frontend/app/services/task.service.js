import { fetchWithLoader } from "../components/base/helpers";

export class TaskServices {
  getOneTask(taskId) {
    return fetchWithLoader(`http://localhost:3000/tasks/${taskId}`).then(res => res.json());
  }

  getAllTasks(query) {
    const q = query ? `?q=${query}` : '' ;
    return  fetchWithLoader('http://localhost:3000/tasks' + q).then(res => res.json());
  }

  getTaskById(id) {
    return fetchWithLoader(`http://localhost:3000/tasks/${id}`).then(res => res.json());
  }
}