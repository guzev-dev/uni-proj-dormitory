import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormitoriesListComponent } from './dormitories-list/dormitories-list.component';
import { DormitoryPageComponent } from './dormitory-page/dormitory-page.component';
import {RouterModule, Routes} from "@angular/router";
import { RoomsListComponent } from './rooms-list/rooms-list.component';

const routes: Routes = [
  {path: 'dormitory/:id', component: DormitoryPageComponent}
]

@NgModule({
  declarations: [
    DormitoriesListComponent,
    DormitoryPageComponent,
    RoomsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    DormitoriesListComponent
  ]
})
export class DormitoryModule { }
