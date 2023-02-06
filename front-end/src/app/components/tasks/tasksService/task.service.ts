import { Task } from './../taskModel/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  create(idProject: string, task: Task) {
    return this.http.post(`${this.url}/${idProject}/task/create`, task);
  }

  list(id: String): Observable<any> {
    return this.http.get(`${this.url}/${id}/task/`);
  }

  edit(idProject: any, idTask: string, task: Task): Observable<any> {
    return this.http.post(
      `${this.url}/${idProject}/task/update/${idTask}`,
      task
    );
  }

  editTaskStatus(idProject: any, idTask: string, task: Task): Observable<any> {
    return this.http.post(
      `${this.url}/${idProject}/task/updateStatus/${idTask}`,
      task
    );
  }

  delete(idProject: any, idTask: string): Observable<any> {
    return this.http.delete(`${this.url}/${idProject}/task/delete/${idTask}`);
  }
}
