import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-icpcfuture',
  templateUrl: './icpcfuture.component.html',
  styleUrls: ['./icpcfuture.component.css']
})
export class IcpcfutureComponent implements OnInit {


  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('topcoder.com').subscribe(
   res=>
      { 
        this.user=res
      },
      err=>
      {
        console.log("error in Accessing from service ",err)
      }
    )
  }
}
