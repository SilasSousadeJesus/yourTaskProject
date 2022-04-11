import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectsComponent } from '../projects.component';
import { EditprojectComponent } from '../editproject/editproject.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    EditprojectComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
    FormsModule

  ]
})
export class ProjectModuleModule { }
