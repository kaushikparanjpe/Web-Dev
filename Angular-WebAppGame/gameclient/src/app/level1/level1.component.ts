import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { LoginComponent } from '../login/login.component';
import { User } from '../model/User';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
  public levelone:string;
  public power: number = 100;
  showmonster = false;
  next1 = false;
  display = 'none';
  display1 = 'none';
  display4 ='none';
  level3= false;
  next4 = false;
  next5 = false;
  display3 = 'none';
  fightmonster3 =false;
  first = true;
  powerfight2 = false;
  wander = false;
  next2 = false;
  next3 = false;
  fightmonster2 = false;
  fightmonster4 = false;
  showmonster1 = false;
  public point = 0;
  powerfight1 = false;
  public thunderball =  0;
  second=  true;
  level2 = false;
  fightmonster = false;
  powerfight = false;
  public timeoutID;
  timeLeft: number = 10;
  showmonster3 = false;
  powerfight3 = false;
  interval;
  private current_user : User;

  constructor(private homeservice : HomeService, private router:Router) { 
    this.current_user = this.homeservice.getUserDetails();

    if(homeservice.getUL() == 2){
      this.second = false;
      this.showmonster = false;
      this.next1 = false;
      this.fightmonster = false;
      this.powerfight = false;
      this.level2 = true;
      this.showmonster1 = true;
      this.display1 = 'block';
      this.display ='none';
      this.thunderball += 1;
    }
    else if(homeservice.getUL()== 3){
     this.router.navigateByUrl('level3');

    }
    else if(homeservice.getUL()== 1){
      this.level1();
    }
  }

  
  level1(){
    console.log('hey'); 
    this.homeservice.getLevel1().subscribe((data:any) => this.levelone = data );
  }
   climb(){
     console.log("I came");
      this.showMonster();
  }
  showMonster(){
    console.log("I came sm");
    this.first = false;
    this.second = false;
    this.showmonster = true;
   }

  Next(){
    this.showmonster = false;
    this.next1 = true;
  }
  Next2(){
    this.showmonster1 = false;
    this.next1 = true;
  }
  Next1(){
    this.showmonster = false;
    this.next4 = true;
  }
  // Next3(){
  //   this.showmonster3 = false;
  //   this.next1 = true;
  // }
  fight3(){
    this.next4 = false;
    this.next5 = true;
  }
  fight4(){
    this.next5 = false;
    this.next3 = true;
  }
  fight(){
    this.next1 = false;
    this.fightmonster = true;
    this.display = 'block';
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
    this.timeLeft = 20;
  }
  UpdatePower(){
    this.fightmonster = false;
    this.powerfight = true;
    if(this.power > 100){
      this.fightmonster2 = false;
      this.powerfight = false;
      this.powerfight1 = true;
      this.fightmonster4 = false;
      //this.fightmonster2 = true;
    }
      else if(this.power === 500){
        this.fightmonster4 = false;
        this.powerfight3 =true;
      }
    
  }
  logout(){
    this.router.navigateByUrl('');
  }
  UpdatePower3(){
    this.fightmonster4 = true;
    this.powerfight3 = true; 

  }
  UpdatePower2(){
    this.fightmonster4 = false;
    this.fightmonster3 = false;
    this.powerfight2 = true;
  }

  UpdatePower4(){
    alert("Locked, to Unlock please clear level 2");
  }
  powerReduce(){
   this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
   if(this.power > 0 && this.timeLeft === 0){
     alert("Game Over");
     this.router.navigateByUrl("home");
   }
   else if(this.power === 0 && this.timeLeft !==0){
     this.powerfight = false;
     this.current_user.current_level = 2;
     this.homeservice.updateUser(this.current_user).subscribe(data => this.current_user = data);
     this.level2 = true;
     this.showmonster1 = true;
     this.display1 = 'block';
     this.display ='none';
     this.thunderball += 1;
     this.point += 10;
     alert('Welcome to level 2');
     console.log(this.point);

   }

  }
fight2(){
  this.next1 = false;
  this.display = 'block';
  this.power = 200;
  this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.timeLeft = 0;
    }
  },1000)
  this.timeLeft = 50;
  //this.timeLeft = 50;
  this.fightmonster2 = true;
  
  }
  powerReduce2(){
    console.log("Went Inside pr2");
    this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
    if(this.power ===110){
      this.powerfight1 = false;
      this.display ='none';
      this.wander = true;
      this.showmonster = true;
      alert("Monster not dead is still alive, wander around to collect points to buy new weapon");
 
    } 
   
  }

  fight5(){
    this.next3 = false;
    this.display3 = 'block';
    this.fightmonster3 = true;
  }
  powerReduce3(){
    this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
    if(this.power > 0 && this.timeLeft === 0){
      alert("Game Over");
      this.router.navigateByUrl("home");
    }
    else if(this.power === 0 && this.timeLeft !==0){
      this.powerfight2 = false;
      this.display3 ='none';
      this.current_user.current_level = 3;
      this.homeservice.updateUser(this.current_user).subscribe(data => this.current_user = data);
      alert("Welcome to level 3");
      this.router.navigateByUrl('level3');
    }
  }

  powerReduce4(){
    alert("Locked, to Unlock please clear level 2");
  }
  ngOnInit() {
  }

}
