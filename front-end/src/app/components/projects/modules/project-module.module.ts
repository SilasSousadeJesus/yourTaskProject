import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectsComponent } from '../projects.component';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule
  ]
})
export class ProjectModuleModule { }
