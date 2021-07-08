import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  

  
  constructor(private sharedservice:SharedService,private router:Router) { }

  ngOnInit(): void {
  }



  
  addUserData(userObj)
{
    
    let formData=new FormData();
    console.log("im in ts")

    //add userObj
    formData.append("userObj",JSON.stringify(userObj))

  
   this.sharedservice.createUsers(userObj).subscribe(
     res=>
     {
           if(res.message==="user created")
                {
                  alert("User Created")
                 this.router.navigateByUrl("/userprofile")
                }
     else
     {
               alert(res.message)
     }
    },
     err=>
     {
          console.log("err in ",err)
          alert("something wrong in user creation")
     }
   )
         
}





}
