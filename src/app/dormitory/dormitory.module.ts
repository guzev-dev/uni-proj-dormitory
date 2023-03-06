import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DormitoryListComponent } from './dormitory-list/dormitory-list.component';



@NgModule({
  declarations: [
    DormitoryListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DormitoryListComponent
  ]
})
export class DormitoryModule { }
