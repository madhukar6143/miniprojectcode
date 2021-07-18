import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-facebookfuture',
  templateUrl: './facebookfuture.component.html',
  styleUrls: ['./facebookfuture.component.css']
})
export class FacebookfutureComponent implements OnInit {

  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean=false
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('facebook.com/hackercup').subscribe(
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
