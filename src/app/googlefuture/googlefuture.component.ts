import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-googlefuture',
  templateUrl: './googlefuture.component.html',
  styleUrls: ['./googlefuture.component.css']
})
export class GooglefutureComponent implements OnInit {

  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean=false
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('codingcompetitions.withgoogle.com').subscribe(
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
