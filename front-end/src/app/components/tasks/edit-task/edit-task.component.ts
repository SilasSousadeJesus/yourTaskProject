import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../info-user/userService/user-service.service';
import { TaskService } from '../tasksService/task.service';
import { Task } from "../taskModel/task";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

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

  taskIdent(){
    const taskId = this.activeRoute.snapshot.params['taskId'];
    return taskId;
  }

  editTask(){
    const projectId = this.projectIdent()
    const taskId = this.taskIdent()

     this.taskService.edit(projectId, taskId, this.task).subscribe(res => {
      this.router.navigate([`/projeto/task/${projectId}`]);
     }, err => console.log(err))

  }

routeTask(){
    const projectId = this.projectIdent()

    return this.router.navigate([`/projeto/task/${projectId}`]);

  }

}
