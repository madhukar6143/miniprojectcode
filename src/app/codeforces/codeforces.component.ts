import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codeforces',
  templateUrl: './codeforces.component.html',
  styleUrls: ['./codeforces.component.css']
})
export class CodeforcesComponent implements OnInit {

  i:number=0
  j:number=0
  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
 currentdate=new Date;

  ngOnInit(): void {
  }


  givename()
  {
    this.i=1
    this.j=0
    this.sharedservice.callContest('codeforces.com').subscribe(
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
      this.j=1
      this.i=0
      this.sharedservice.callContestFromPast('codeforces.com').subscribe(
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

