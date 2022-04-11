import { Component, OnInit } from '@angular/core';
import { ProjectModel } from "./model/project-model";
import { UserServiceService } from "../info-user/userService/user-service.service";
import { ProjectService } from './projectService/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:any = [{
    name: '',
    description: '',
    user: ''
  }]

  constructor(private userService: UserServiceService,
              private projectService: ProjectService ) { }

  ngOnInit(): void {
    this.listprojects()
  }

  listprojects(){

    const userCurrent = <any> this.userService.UserIdent()
    const userCurrentId = userCurrent.id

    this.projectService.listProject(userCurrentId).subscribe(res=>{
      return this.projects = res;
    }, err=> console.log(err))



  }

  deleteProject(id:string){
      this.projectService.deleteProject(id).subscribe(res=>{
        this.listprojects()
      }, err=>console.log(err))
  }

}
