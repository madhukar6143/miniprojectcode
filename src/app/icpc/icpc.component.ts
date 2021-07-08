import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-icpc',
  templateUrl: './icpc.component.html',
  styleUrls: ['./icpc.component.css']
})
export class IcpcComponent implements OnInit {
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
    this.sharedservice.callContest('icpc.global').subscribe(
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
      this.sharedservice.callContestFromPast('icpc.global').subscribe(
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

