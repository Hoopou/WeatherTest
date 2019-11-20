import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavBarComponent } from './containers/default-layout/custom-nav-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { HttpModule } from '@angular/http';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { CookieInterceptor } from './core/interceptors/cookie.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    HttpModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookieInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
