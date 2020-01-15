import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public story: string;
  public userLevel: number = 1;
  public instr_bool = false;
  constructor(private homeservice : HomeService,private router:Router) {
    this.get();
    this.instr_bool = false;
   }
   get(){
     this.homeservice.getStory().subscribe((data:any) =>  this.story = data);
   }
   level1(){
    this.homeservice.setUserLevel(1);
    this.router.navigateByUrl('level1');
     
   }
   Resume(){
    this.router.navigateByUrl('level1');
   }
  
   showInstructions(){
     this.instr_bool = !this.instr_bool;
   }
  
   ngOnInit() {
  }



}
