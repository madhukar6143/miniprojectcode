import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-googlepast',
  templateUrl: './googlepast.component.html',
  styleUrls: ['./googlepast.component.css']
})
export class GooglepastComponent implements OnInit {

  constructor( private sharedservice: SharedService) { }
  user:any[]=[];
  check:boolean;
   currentdate=new Date;
  
    ngOnInit(): void {
   
        this.sharedservice.callContestFromPast('codingcompetitions.withgoogle.com').subscribe(
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