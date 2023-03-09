import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {DormitoryModule} from "./dormitory/dormitory.module";
import {FooterComponent} from './shared/footer/footer.component';
import {StaticPagesModule} from "./static-pages/static-pages.module";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {SettlementApplicationModule} from "./application/settlement-application.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {scrollPositionRestoration: 'enabled'}),
    DormitoryModule,
    StaticPagesModule,
    AuthModule,
    SettlementApplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
