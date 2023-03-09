import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateApplicationComponent} from "./create-application/create-application.component";

const routes: Routes = [
  {path: 'create-application', component: CreateApplicationComponent}
]

@NgModule({
  declarations: [
    CreateApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettlementApplicationModule { }
