import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { CodingcalenderComponent } from './codingcalender/codingcalender.component';
import { HttpClientModule } from '@angular/common/http';
import { CodeforcesComponent } from './codeforces/codeforces.component';
import { CodechefComponent } from './codechef/codechef.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {FormsModule, NgForm} from '@angular/forms';
import { HackerearthComponent } from './hackerearth/hackerearth.component';
import { CalenderComponent } from './calender/calender.component';
import { GoogleComponent } from './google/google.component';
import { TimedurationPipe } from './timeduration.pipe';
import { IcpcComponent } from './icpc/icpc.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CodingcalenderComponent,
    CodeforcesComponent,
    CodechefComponent,
    UserprofileComponent,
    HackerearthComponent,
    CalenderComponent,
    GoogleComponent,
    TimedurationPipe,
    IcpcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
