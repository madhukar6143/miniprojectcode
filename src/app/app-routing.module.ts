import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { CodechefComponent } from './codechef/codechef.component';
import { CodechefpastComponent } from './codechefpast/codechefpast.component';
import { CodechefpresentComponent } from './codechefpresent/codechefpresent.component';
import { CodeforcesComponent } from './codeforces/codeforces.component';
import { CodeforcesfutureComponent } from './codeforcesfuture/codeforcesfuture.component';
import { CodeforcespastComponent } from './codeforcespast/codeforcespast.component';
import { FacebookComponent } from './facebook/facebook.component';
import { FacebookfutureComponent } from './facebookfuture/facebookfuture.component';
import { FacebookpastComponent } from './facebookpast/facebookpast.component';
import { GoogleComponent } from './google/google.component';
import { GooglefutureComponent } from './googlefuture/googlefuture.component';
import { GooglepastComponent } from './googlepast/googlepast.component';
import { HackerearthComponent } from './hackerearth/hackerearth.component';
import { HackerearthfutureComponent } from './hackerearthfuture/hackerearthfuture.component';
import { HackerearthpastComponent } from './hackerearthpast/hackerearthpast.component';
import { HomeComponent } from './home/home.component';
import { IcpcComponent } from './icpc/icpc.component';
import { IcpcfutureComponent } from './icpcfuture/icpcfuture.component';
import { IcpcpastComponent } from './icpcpast/icpcpast.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
{path:"home",component:HomeComponent,children:[
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  }
]},
{path:"signup",component:SignupComponent},
{path:"codechef",component:CodechefComponent,children:[
  {
  path:"codechefpast",component:CodechefpastComponent
  },
  {
    path:"codechefpresent",component:CodechefpresentComponent
  },
  {
    path:'',redirectTo:'/codechef/codechefpresent',pathMatch:'full'
  }
]},
{path:"codeforces",component:CodeforcesComponent,children:[
  {
  path:"codeforcespast",component:CodeforcespastComponent
  },
  {
    path:"codeforcesfuture",component:CodeforcesfutureComponent
  },
  {
    path:'',redirectTo:'/codeforces/codeforcesfuture',pathMatch:'full'
  }
]},
{path:"hackerearth",component:HackerearthComponent,children:[
  {
  path:"hackerearthpast",component:HackerearthpastComponent
  },
  {
    path:"hackerearthfuture",component:HackerearthfutureComponent
  },
  {
    path:'',redirectTo:'/hackerearth/hackerearthfuture',pathMatch:'full'
  }
]},
{path:"calender",component:CalenderComponent},
{path:"userprofile",component:UserprofileComponent},
{path:"google",component:GoogleComponent,children:[
  {
  path:"googlepast",component:GooglepastComponent
  },
  {
    path:"googlefuture",component:GooglefutureComponent
  },
  {
    path:'',redirectTo:'/google/googlefuture',pathMatch:'full'
  }
]},
{path:"facebook",component:FacebookComponent,children:[
  {
  path:"facebookpast",component:FacebookpastComponent
  },
  {
    path:"facebookfuture",component:FacebookfutureComponent
  },
  {
    path:'',redirectTo:'/facebook/facebookfuture',pathMatch:'full'
  }
]},
{path:"topcoder",component:IcpcComponent,children:[
  {
  path:"topcoderpast",component:IcpcpastComponent
  },
  {
    path:"topcoderfuture",component:IcpcfutureComponent
  },
  {
    path:'',redirectTo:'/topcoder/topcoderfuture',pathMatch:'full'
  }
]},
{
  path:'',redirectTo:'/home',pathMatch:'full'
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
