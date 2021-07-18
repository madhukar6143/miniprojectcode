import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-codeforcesfuture',
  templateUrl: './codeforcesfuture.component.html',
  styleUrls: ['./codeforcesfuture.component.css']
})
export class CodeforcesfutureComponent implements OnInit {

 
  constructor( private sharedservice: SharedService ) { }
user:any[]=[];
check:boolean=false
 currentdate=new Date;

  ngOnInit(): void {

    this.sharedservice.callContest('codeforces.com').subscribe(
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
