import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { SelectorMatcher } from '@angular/compiler';
import { User } from '../model/User';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {
  showmonster = false;
  next1 = false;
  second = true;
  fightmonster = false;
  powerfight = false;
  display ='none';
  display1 ='none';
  display3 = 'none';
  display4 ='none';
  //display4 = 'none';
  weapon1 = false;
  weapon2 = false;
  weapon4 = false;
  public power: number;
  interval;
  timeLeft : number;
  public point : number;
  thunderball :number;
  count: number = 0;
  count1:number = 0;
  weapon3 = false;
  count2: number=0;
  count3:number= 0;
  private current_user : User;
  constructor(private homeservice: HomeService, private router: Router) { 
    this.current_user = this.homeservice.getUserDetails();

 
  }

  climb(){
    console.log("I came");
     this.showMonster();
 }
 showMonster(){
   console.log("I came sm");
   //this.first = false;
   this.second = false;
   this.showmonster = true;
  }

 Next(){
   this.showmonster = false;
   this.next1 = true;
 }

 fight(){
   this.next1 = false;
   this.fightmonster = true;
   this.display = 'block';
   this.display1 ='block';
   this.display3 ='block';
   this.display4 ='block';
    this.power = 500;
    this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.timeLeft = 0;
    }
  },1000)
  this.timeLeft = 60;

 }
 UpdatePower(){
  this.fightmonster = false;
  this.powerfight = true; 
  this.weapon1 = true;
  this.weapon2 = false;
  this.weapon3 = false;
  this.weapon4 = false;
}

UpdatePower2(){
  this.fightmonster= false;
  this.powerfight = true;
  this.weapon1 = false;
  this.weapon2 = true;
  this.weapon3 = false;
  this.weapon4 = false;

}

UpdatePower3(){
  this.fightmonster = false;
  this.powerfight = true;
  this.weapon1 = false;
  this.weapon2 = false;
  this.weapon3 =true;
  this.weapon4 = false;
}

UpdatePower4(){
  this.fightmonster = false;
  this.powerfight = true;
  this.weapon1 = false;
  this.weapon2 = false;
  this.weapon3 = false;
  this.weapon4 = true;
}

  powerReduce(){
    this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
    this.count +=1;
    console.log(this.count);
    if(this.count < 20){
      if(this.power > 0 && this.timeLeft === 0){
        alert("Game Over");
        this.router.navigateByUrl("home");
      }
      else if(this.power <= 0 && this.timeLeft !==0){
        this.powerfight = false;
        this.display1 = 'block';
        this.display ='none';
        this.display3 ='block';
        this.weapon1 = true;
        this.thunderball += 1;
        this.point += 10;
        alert("Congrats!!!You Have Won...!!!");  
        this.router.navigateByUrl('home');
    }
  }
  else{
    alert("Please Select other weapon");
    this.weapon1 = false;
    //this.weapon2 =true;
    this.display = 'none'
  }
  
}

powerReduce2(){
  this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
  this.count1 +=1 ;
  console.log(this.count +"thunder sword");
  if(this.count1 <= 20){
  if(this.power > 0 && this.timeLeft === 0){
    alert("Game Over");
    this.router.navigateByUrl("home");
  }
  else if(this.power <= 0 && this.timeLeft !==0){
    this.powerfight = false;
    this.weapon1 = true;
    this.weapon2 = true;
    this.display1 = 'block';
    this.display ='none';
    this.display3 ='block';
    this.thunderball += 1;
    this.point += 10;
    console.log(this.point);
    alert("Congrats!!!You Have Won...!!!");  
    this.router.navigateByUrl('home');
}
  }
  else{
    alert("OHHH NOO MOnster is still alve MOre Power");
    //this.weapon1 = true;
    this.weapon2=false;
    this.display3='none';
  }
}

powerReduce3(){
  //this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
  this.power -=50;
  this.count2 +=1 ;
  console.log(this.count2 +"thunder sword");
  if(this.count2 <= 2){
  if(this.power > 0 && this.timeLeft === 0){
    alert("Game Over");
    this.router.navigateByUrl("home");
  }
  else if(this.power <= 0 && this.timeLeft !==0){
    this.powerfight = false;
    this.weapon1 = true;
    this.weapon2 = true;
    this.weapon3 =true;
    this.display1 = 'block';
    this.display ='none';
    this.display3 ='block';
    this.display4 ='block';
    this.thunderball += 1;
    this.point += 10;
    console.log(this.point);
    alert("Congrats!!!You Have Won...!!!");  
    this.router.navigateByUrl('home');
}
  }
  else{
    alert("This thunder ball is not killing the monster try other weapon");
    this.weapon3 = false;
    this.display4 ='none';
  }

}
powerReduce4(){
  //this.homeservice.getPower(this.power).subscribe((data:any) => this.power = data);
  this.power -=25;
  this.count3 +=1 ;
  console.log(this.count2 +"thunder sword");
  if(this.count3 <= 2){
  if(this.power > 0 && this.timeLeft === 0){
    alert("Game Over");
    this.router.navigateByUrl("home");
  }
  else if(this.power <= 0 && this.timeLeft !==0){
    this.powerfight = false;
    this.weapon1 = true;
    this.weapon2 = true;
    this.weapon3 =true;
    this.weapon4 = true;
    this.display1 = 'block';
    this.display ='none';
    this.display3 ='block';
    this.display4 ='block';
    this.thunderball += 1;
    this.point += 10;
    console.log(this.point);
    alert("Congrats!!!You Have Won...!!!");  
    this.router.navigateByUrl('home');
}
  }
  else{
    alert("This thunder ball is not killing the monster try other weapon");
    this.weapon4 = false;
    this.display1 ='none';
  }

}

logout(){
  this.router.navigateByUrl('');
}

  ngOnInit() {
  }

}
