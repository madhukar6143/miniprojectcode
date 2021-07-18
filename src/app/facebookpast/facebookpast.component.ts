import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-facebookpast',
  templateUrl: './facebookpast.component.html',
  styleUrls: ['./facebookpast.component.css']
})
export class FacebookpastComponent implements OnInit {

  constructor( private sharedservice: SharedService ) { }
  user:any[]=[];
  check:boolean;
   currentdate=new Date;
  
    ngOnInit(): void {
   
        this.sharedservice.callContestFromPast('facebook.com/hackercup').subscribe(
       res=>
          { 
            this.user=res
            if(this.user.length)
            this.check=true;
            else
            this.check=false;
          },
          err=>
          {
            console.log("error in Accessing from service ",err)
          }
        )
    }
  
  
   
  }