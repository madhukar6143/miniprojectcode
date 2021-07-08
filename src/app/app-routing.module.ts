import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CodechefComponent } from './codechef/codechef.component';
import { CodeforcesComponent } from './codeforces/codeforces.component';
import { CodingcalenderComponent } from './codingcalender/codingcalender.component';
import { FacebookComponent } from './facebook/facebook.component';
import { GoogleComponent } from './google/google.component';
import { HackerearthComponent } from './hackerearth/hackerearth.component';
import { IcpcComponent } from './icpc/icpc.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
{path:"home",component:CodingcalenderComponent},
{path:"signup",component:SignupComponent},
{path:"codechef",component:CodechefComponent},
{path:"codeforces",component:CodeforcesComponent},
{path:"hackerearth",component:HackerearthComponent},
{path:"calender",component:CalenderComponent},
{path:"userprofile",component:UserprofileComponent},
{path:"google",component:GoogleComponent},
{path:"facebook",component:FacebookComponent},
{path:"icpc",component:IcpcComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
