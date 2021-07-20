import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor( private http:HttpClient) { }

  callContest(name):Observable<any>
  {

    return this.http.get('presentcontest/'+name)
  }


  callContestFromPast(name):Observable<any>
  {

    return this.http.get('pastcontest/'+name)
  }


  loginUser(credentials):Observable<any>{
    console.log("cred",credentials)
    return  this.http.post("/user/login",credentials)
  }



  getUsers():Observable<any>
  {
    return this.http.get("/user/getusers")
  }

getUsersbyUsername(username):Observable<any>
{
  return this.http.get("/user/getusers/username")
}


createUsers(userObj):Observable<any>
{
  return this.http.post("/user/createuser",userObj)
}

modifyUser(userObj):Observable<any>
{
  return this.http.put("/user/modifyuser",userObj)
}

deleteUser(username):Observable<any>
{
  return this.http.delete("user/deleteUser")
}



}
