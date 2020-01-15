import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './level1/level1.component';
import { LoginComponent } from './login/login.component';
import { Level3Component } from './level3/level3.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'SignUp',
    component: SignupComponent
    },    
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'level1',
    component: Level1Component
  },
  {
    path: 'level3',
    component: Level3Component
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
