import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../info-user/userService/user-service.service';
import { ProjectService } from '../projectService/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  projects:any = [{
    name: '',
    description: '',
    user: this.userIdent()
  }]


  constructor(
            private userService: UserServiceService,
            private projectService: ProjectService,

            private activeRoute: ActivatedRoute,
            private router: Router
          ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];

    this.projectService.showProject(id).subscribe(res=>{
      this.projects = res;
    }, err=>console.log(err))

  }

  editProject(){

     this.projectService.editProject(this.projects._id, this.projects).subscribe(res=>{
         this.router.navigate(['/projeto'])
      }, err=> console.log(err))


  }

  userIdent(){
    const userCurrent = <any> this.userService.UserIdent()
    const userCurrentId = userCurrent.id
    return userCurrentId
  }

}
