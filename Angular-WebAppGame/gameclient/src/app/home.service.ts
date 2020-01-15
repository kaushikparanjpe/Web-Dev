import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { User } from './model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
 
  userLevel : number;
  UserDetails : User;
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44315/api/values/story';

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'text/plain ; charset=utf-8'});
  }

  public setUserLevel(value : number){
    this.userLevel = value;
  }

  public getUL(){
    return this.userLevel;
  }
  public setUserDetails(UserDetails : User){
    this.UserDetails = UserDetails;

  }
  public getUserDetails(){
    return this.UserDetails;
  }
  getStory(){
    return this.http.get(this.accessPointUrl, {responseType : 'text'});
  }

  getLevel1(){
    var level1 = "/level/1"
    return this.http.get(`${this.accessPointUrl}${level1}`,{responseType : 'text'});
  }

  getPower(s){

    var power = "/" + s;
    return this.http.post(`${this.accessPointUrl}${power}`,{headers:this.headers});
  }

  getUser(userid,pwd): Observable<User>{

    return this.http.get<User>("https://localhost:44315/api/values/user/"+userid+":"+pwd);
  }

  addUser(_userid:string, _pwd:string): Observable<User>{
    let user = new User();
    user.password = _pwd;
    user.userId = _userid;
    user.current_level = 1;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>("https://localhost:44315/api/values/user/{id}", user, {headers:headers})
    }
    
  updateUser(user: User): Observable<User>{
    let header = new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.put<User>("https://localhost:44315/api/values/user/"+user.userId,user,{headers:header});

  }
}
