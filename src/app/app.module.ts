import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main-page/main/main.component';
import {DormitoryModule} from "./dormitory/dormitory.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    DormitoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
