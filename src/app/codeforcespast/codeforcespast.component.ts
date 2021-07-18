import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codeforcespast',
  templateUrl: './codeforcespast.component.html',
  styleUrls: ['./codeforcespast.component.css']
})
export class CodeforcespastComponent implements OnInit {
  
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