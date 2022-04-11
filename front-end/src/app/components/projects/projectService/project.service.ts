import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectModel } from "../model/project-model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:3000/project';

  constructor(private http: HttpClient) { }

  listProject(userId:string){
    return this.http.get<ProjectModel>(`${this.url}/${userId}`)
  }

  deleteProject(id:string){
    return this.http.delete(`${this.url}/deleteProject/${id}`);
  }


}
