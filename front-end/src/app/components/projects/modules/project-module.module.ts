import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectsComponent } from '../projects.component';
import { EditprojectComponent } from '../editproject/editproject.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from '../../tasks/tasks.component';
import { EditTaskComponent } from '../../tasks/edit-task/edit-task.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    EditprojectComponent,
    TasksComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
    FormsModule
  ]
})
export class ProjectModuleModule { }
