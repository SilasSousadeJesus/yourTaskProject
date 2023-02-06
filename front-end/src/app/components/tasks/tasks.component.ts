import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  UserServiceService  } from "../info-user/userService/user-service.service";
import { TaskService } from "../tasks/tasksService/task.service";
import { Task } from './taskModel/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  formValidation:any = "";
  ischecked!:boolean

  tasks:any = [{
    name: '',
    completed: '',
    project:  '',
    assignedTo: ''
  }]

  task:Task = {
    name: '',
    completed: false,
    project:  this.projectIdent(),
    assignedTo: this.userIdent()
  }

  constructor(
              private userService: UserServiceService,
              private activeRoute: ActivatedRoute,
              private taskService: TaskService,
              private router: Router
              ) { }

  ngOnInit(): void {

    this.projectIdent();
    this.listTask();

  }


  onchangestate($event:any, id:any){
   const projectId = this.projectIdent()
   const taskId = id
   const isCheck:boolean = $event.target.checked;
   this.task.completed = isCheck

    this.taskService.editTaskStatus(projectId, taskId, this.task).subscribe(res => {
     this.listTask();
    }, err => console.log(err))

  }

  userIdent(){
    const userCurrent = <any> this.userService.UserIdent()
    const userCurrentId = userCurrent.id
    return userCurrentId;
  }

  projectIdent(){
    const id = this.activeRoute.snapshot.params['id'];
    return id;
  }

  createTask(){
    this.taskService.create(this.projectIdent(), this.task).subscribe(res=>{
       this.listTask();
    }, err=>  this.formValidation = err.error.message)
  }

  listTask(){
    const projectId = this.projectIdent()
    this.taskService.list(projectId).subscribe(res=>{
      this.tasks = res
    },err => console.log(err))
  }


  routerEditTask(taskId:string){
    const projectId = this.projectIdent()
    this.router.navigate([`/projeto/task/${projectId}/${taskId}`]);
  }

  deleteTask(idTask: string){
    this.taskService.delete(this.projectIdent(), idTask).subscribe(res=>{
      this.listTask();
    }, err=>console.log(err))
  }

  // https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D

}
