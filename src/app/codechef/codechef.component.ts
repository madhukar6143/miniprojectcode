import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codechef',
  templateUrl: './codechef.component.html',
  styleUrls: ['./codechef.component.css']
})
export class CodechefComponent implements OnInit {

  
  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
 currentdate=new Date;

  ngOnInit(): void {
  }

  givename()
  {
    
    this.sharedservice.callContest('codechef.com').subscribe(
   res=>
      { 
        this.user=res
      },
      err=>
      {
        console.log("error in Accessing from service ",err)
      }
    )}


    pastContest()
    {
  
      this.sharedservice.callContestFromPast('codechef.com').subscribe(
     res=>
        { 
          this.user=res
        },
        err=>
        {
          console.log("error in Accessing from service ",err)
        }
      )}
}

