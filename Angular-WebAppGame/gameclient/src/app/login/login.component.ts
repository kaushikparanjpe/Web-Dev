import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public _user : string;
  public _pwd : string;
  public u : User;
  public _getUsr : User;
  err: HttpErrorResponse
  public userlevel: number = 1;
  //LoginForm :FormGroup;
  constructor(private homeservice : HomeService, private router:Router) { 
    this.userlevel = 1;

    //this.verifyUser();
  }

  verifyUser(){
    //this._user = (this.LoginForm.value._user);
    //this._pwd =(this.LoginForm.value._pwd);
    this.homeservice.getUser(this._user, this._pwd).subscribe((data: any)=>
    { 
      const s = this.loggedin(data);
      if(s === true){
        this.router.navigateByUrl('home');
      }
      else{
        alert("Sorry");
      }
        
    });
  

// loggedin(data: any){

}
loggedin(data: any){
  this._getUsr = data;
  console.log(this._getUsr + "!!!!@@@@@@@###############")
  if(this._getUsr !== null){
        alert(this._getUsr.current_level);
        this.homeservice.setUserDetails(this._getUsr);
        this.homeservice.setUserLevel(this._getUsr.current_level);
        return true;
  }
  else{
    return false;
  }
  
}
  signupuser(){
    this.router.navigateByUrl('SignUp');
  }
  ngOnInit() {

  }
}
