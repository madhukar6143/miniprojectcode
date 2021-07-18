import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codechefpresent',
  templateUrl: './codechefpresent.component.html',
  styleUrls: ['./codechefpresent.component.css']
})
export class CodechefpresentComponent implements OnInit {

  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean=false
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('codechef.com').subscribe(
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
