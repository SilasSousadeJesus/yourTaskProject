import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprojectComponent } from '../editproject/editproject.component';
import { ProjectsComponent } from '../projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'edit/:id', component: EditprojectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModuleRoutingModule { }
