import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor( private http:HttpClient) { }

  
  // call to display all future contest from present time
  callContest(name):Observable<any>
  {

    return this.http.get('presentcontest/'+name)
  }

//callling contests from past 30 days 
  callContestFromPast(name):Observable<any>
  {

    return this.http.get('pastcontest/'+name)
  }


  
  //fucntion call for login from services
  loginUser(credentials):Observable<any>{
    console.log("cred",credentials)
    return  this.http.post("/user/login",credentials)
  }



 
//function call for creating a newuser from services 

createUsers(userObj):Observable<any>
{
  return this.http.post("/user/createuser",userObj)
}




}
