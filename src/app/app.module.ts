import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';
// import { AuthModalComponent } from './user/auth-modal/auth-modal.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
