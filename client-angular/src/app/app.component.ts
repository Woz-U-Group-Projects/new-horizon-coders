import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayLoginComponent } from './display-login/display-login.component'






const routes: Routes = [
  {
    path:'',
   redirectTo: '/home',
   pathMatch:'full'
  },
  {
    path:'home',
    component: StoreComponent
  },
  {
   path:'appointments',
   component: AppointmentsComponent
  },
  
  {
    path:'login',
    component: LoginComponent
  },

  {
     path: 'signup',
    component: SignupComponent
  },

  {
      path:'profiles',
      component: ProfilesComponent
    },
    {
      path:'display-login',
      component:DisplayLoginComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
