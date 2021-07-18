import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-hackerearthfuture',
  templateUrl: './hackerearthfuture.component.html',
  styleUrls: ['./hackerearthfuture.component.css']
})
export class HackerearthfutureComponent implements OnInit {

  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean=false
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('hackerearth.com').subscribe(
   res=>
      { 
        this.user=res
        if(this.user.length)
          this.check=true;
      },
      err=>
      {
        console.log("error in Accessing from service ",err)
      }
    )
  }

 
}
