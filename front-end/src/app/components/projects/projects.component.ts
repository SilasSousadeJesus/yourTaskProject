import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../info-user/userService/user-service.service';
import { ProjectService } from './projectService/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  formValidation: any = '';
  projects: any = [
    {
      name: '',
      description: '',
      user: '',
    },
  ];

  project: any = {
    name: '',
    description: '',
    user: this.userIdent(),
  };
  idUserCurrent!: string;
  constructor(
    private userService: UserServiceService,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userIdent();
    this.listprojects();
  }

  userIdent() {
    const userCurrent = <any>this.userService.UserIdent();
    this.idUserCurrent = userCurrent.id;
  }

  createProject() {
    this.projectService.createProject(this.project).subscribe(
      (res) => {
        this.listprojects();
      },
      (err) => {
        this.formValidation = err.error.message;
      }
    );
  }

  listprojects() {
    this.projectService.listProject(this.idUserCurrent).subscribe(
      (res) => {
        this.projects = res;
      },
      (err) => console.log(err)
    );
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(
      (res) => {
        this.listprojects();
      },
      (err) => console.log(err)
    );
  }

  routerEdit(id: string) {
    this.router.navigate([`/projeto/edit/${id}`]);
  }

  routerTasks(id: string) {
    this.router.navigate([`/projeto/task/${id}`]);
  }
}
