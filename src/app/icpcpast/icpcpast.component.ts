import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-icpcpast',
  templateUrl: './icpcpast.component.html',
  styleUrls: ['./icpcpast.component.css']
})
export class IcpcpastComponent implements OnInit {

  
  constructor( private sharedservice: SharedService) { }
  user:any[]=[];
  check:boolean;
   currentdate=new Date;
  
    ngOnInit(): void {
   
        this.sharedservice.callContestFromPast('topcoder.com').subscribe(
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