import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent {
public user : User;
public _user : string;
public _pwd : string;
constructor(private homeservice : HomeService, private router:Router) { 
this.user = new User();
}

addNewUser(){
this.homeservice.addUser(this._user, this._pwd).subscribe(data=>
    {
        this.user=data ;
        if( this.user.userId == this._user){
            alert("User Signed Up successfully..!")
            this.router.navigateByUrl('');
        }
        else
        {
            alert("Username Already Present...!")
        }
    });
}
}