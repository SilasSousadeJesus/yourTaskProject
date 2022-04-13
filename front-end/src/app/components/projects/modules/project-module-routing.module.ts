import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from '../../tasks/edit-task/edit-task.component';
import { TasksComponent } from '../../tasks/tasks.component';
import { EditprojectComponent } from '../editproject/editproject.component';
import { ProjectsComponent } from '../projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'edit/:id', component: EditprojectComponent },
  { path: 'task/:id', component: TasksComponent },
  { path: 'task/:id/:taskId', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModuleRoutingModule { }
