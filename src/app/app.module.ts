import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import { CommonMaterialModules } from './blog/common/material/CommonMaterialModules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { LoginModule } from './login/LoginModule';
import { AuthModule } from './common/auth/AuthModule';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatToolbarModule,
    AuthModule,
    CommonMaterialModules,
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    BrowserAnimationsModule,
    LoginModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
