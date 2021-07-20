import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { CodeforcesComponent } from './codeforces/codeforces.component';
import { CodechefComponent } from './codechef/codechef.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {FormsModule, NgForm} from '@angular/forms';
import { HackerearthComponent } from './hackerearth/hackerearth.component';
import { CalenderComponent } from './calender/calender.component';
import { GoogleComponent } from './google/google.component';
import { IcpcComponent } from './icpc/icpc.component';
import { CodechefpastComponent } from './codechefpast/codechefpast.component';
import { CodechefpresentComponent } from './codechefpresent/codechefpresent.component';
import { CodeforcesfutureComponent } from './codeforcesfuture/codeforcesfuture.component';
import { CodeforcespastComponent } from './codeforcespast/codeforcespast.component';
import { IcpcpastComponent } from './icpcpast/icpcpast.component';
import { IcpcfutureComponent } from './icpcfuture/icpcfuture.component';
import { FooterComponent } from './footer/footer.component';
import { HackerearthpastComponent } from './hackerearthpast/hackerearthpast.component';
import { HackerearthfutureComponent } from './hackerearthfuture/hackerearthfuture.component';
import { FacebookfutureComponent } from './facebookfuture/facebookfuture.component';
import { FacebookpastComponent } from './facebookpast/facebookpast.component';
import { FacebookComponent}from './facebook/facebook.component';
import { GooglepastComponent } from './googlepast/googlepast.component';
import { GooglefutureComponent } from './googlefuture/googlefuture.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CodeforcesComponent,
    CodechefComponent,
    UserprofileComponent,
    HackerearthComponent,
    CalenderComponent,
    GoogleComponent,
    IcpcComponent,
    CodechefpastComponent,
    CodechefpresentComponent,
    CodeforcesfutureComponent,
    CodeforcespastComponent,
    IcpcpastComponent,
    IcpcfutureComponent,
    FooterComponent,
    HackerearthpastComponent,
    HackerearthfutureComponent,
    FacebookComponent,
    FacebookfutureComponent,
    FacebookpastComponent,
    GooglepastComponent,
    GooglefutureComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
