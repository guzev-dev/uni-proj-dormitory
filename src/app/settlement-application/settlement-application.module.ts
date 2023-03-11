import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateApplicationComponent} from "./create-application/create-application.component";
import {ApplicationsListComponent} from './applications-list/applications-list.component';

const routes: Routes = [
  {path: 'create-application', component: CreateApplicationComponent},
  {path: 'applications-list', component: ApplicationsListComponent}
]

@NgModule({
  declarations: [
    CreateApplicationComponent,
    ApplicationsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettlementApplicationModule {
}
