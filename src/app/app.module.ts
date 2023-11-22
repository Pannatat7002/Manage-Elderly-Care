import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { ForgotPageComponent } from './signin-page/component/forgot-page/forgot-page.component';
import { LoadingServiceComponent } from './service/loading-service/loading-service.component';
import { SplashComponent } from './service/splash-service/splash/splash.component';
import { WorkDatabaseService } from './service/work-service/work-database.service';
import { CookieService } from './service/cookie-service/cookie.service';
import { AuthService } from './service/auth-service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninPageComponent,
    ForgotPageComponent,
    LoadingServiceComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(config),
    // AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [WorkDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
