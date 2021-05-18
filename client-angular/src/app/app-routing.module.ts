import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StoreComponent } from './store/store.component'
import { LoginComponent } from './login/login.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StoreComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
