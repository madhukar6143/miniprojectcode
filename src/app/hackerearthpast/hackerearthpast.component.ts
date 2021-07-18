import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hackerearthpast',
  templateUrl: './hackerearthpast.component.html',
  styleUrls: ['./hackerearthpast.component.css']
})
export class HackerearthpastComponent implements OnInit {


    constructor( private sharedservice: SharedService ) { }
  user:any[]=[];
  check:boolean;
   currentdate=new Date;
  
    ngOnInit(): void {
   
        this.sharedservice.callContestFromPast('hackerearth.com').subscribe(
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