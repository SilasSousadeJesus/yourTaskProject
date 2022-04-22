import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectModel } from "../model/project-model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'https://yourtaskproject.herokuapp.com/project';

  constructor(private http: HttpClient) { }

  createProject(project: ProjectModel){
    return this.http.post<ProjectModel>(`${this.url}/create`, project)
  }

  listProject(userId:string){
    return this.http.get<ProjectModel>(`${this.url}/${userId}`)
  }

  deleteProject(id:string){
    return this.http.delete(`${this.url}/deleteProject/${id}`);
  }

  showProject(id: string){
    return this.http.get<ProjectModel>(`${this.url}/showproject/${id}`)
  }

  editProject(id:string, project: ProjectModel){
    return this.http.post<ProjectModel>(`${this.url}/updateProject/${id}`, project)
  }

}
