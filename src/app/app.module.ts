import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {DormitoryModule} from "./dormitory/dormitory.module";
import {FooterComponent} from './shared/footer/footer.component';
import {StaticPagesModule} from "./static-pages/static-pages.module";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {SettlementApplicationModule} from "./settlement-application/settlement-application.module";
import { StoreModule } from '@ngrx/store';
import {appReducer} from "./app.reducer";
import { EffectsModule } from '@ngrx/effects';
import {ApplicationEffects} from "./settlement-application/store/application.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserProfileModule} from "./profile/user-profile.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {scrollPositionRestoration: 'enabled'}),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ApplicationEffects]),
    DormitoryModule,
    StaticPagesModule,
    AuthModule,
    SettlementApplicationModule,
    UserProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
