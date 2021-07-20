import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //inject UserService obj
  constructor(private us:SharedService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(userCredentials){
    
    this.us.loginUser(userCredentials).subscribe(
      res=>{
        if(res.message==="login success"){
          //save token to localstorage
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.username)
          localStorage.setItem("userObj",JSON.stringify(res.userObj))
          //navigate to user profile
          console.log("login sucess")
          this.router.navigateByUrl("/userprofile")
        }
        else{
          alert(res.message)
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }
}