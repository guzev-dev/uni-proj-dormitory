import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {DormitoryModule} from "../dormitory/dormitory.module";
import {ContactsComponent} from './contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    DormitoryModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainComponent,
    RouterModule
  ]
})
export class StaticPagesModule {
}
