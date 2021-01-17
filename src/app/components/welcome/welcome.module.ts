import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop/workshop.component';
import { RouterModule } from '@angular/router';
import { AngularArchitectureComponent } from './angular-architecture/angular-architecture.component';

@NgModule({
  declarations: [WorkshopComponent, AngularArchitectureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'workshop' },
      {
        path: 'workshop', component: WorkshopComponent,
        data: { breadcrumbs: ['Angular Workshop'] }
      },
      {
        path: 'angular-architecture', component: AngularArchitectureComponent,
        data: { breadcrumbs: ['Angular Architecture'] }
      }
    ])
  ]
})
export class WelcomeModule { }
