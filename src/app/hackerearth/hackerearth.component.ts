import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hackerearth',
  templateUrl: './hackerearth.component.html',
  styleUrls: ['./hackerearth.component.css']
})
export class HackerearthComponent implements OnInit {

  
  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
 currentdate=new Date;

  ngOnInit(): void {
  }

  givename()
  {
    
    this.sharedservice.callContest('hackerearth.com').subscribe(
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
  
      this.sharedservice.callContestFromPast('hackerearth.com').subscribe(
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

