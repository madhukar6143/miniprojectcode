import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codechefpast',
  templateUrl: './codechefpast.component.html',
  styleUrls: ['./codechefpast.component.css']
})
export class CodechefpastComponent implements OnInit {

  
  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean;
 currentdate=new Date;

  ngOnInit(): void {
 
      this.sharedservice.callContestFromPast('codechef.com').subscribe(
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