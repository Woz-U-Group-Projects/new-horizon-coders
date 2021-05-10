import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { StoreComponent } from './store/store.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
