import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { LoginComponent } from './login/login.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'appointments', component: AppointmentsComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
