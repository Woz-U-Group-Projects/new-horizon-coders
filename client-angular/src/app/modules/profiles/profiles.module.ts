import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from 'src/app/profiles/profiles.component';
import { DisplayProfilesComponent } from 'src/app/display-profiles/display-profiles.component'





@NgModule({
  declarations: [ProfilesComponent, DisplayProfilesComponent],
  imports: [ CommonModule,HttpClientModule ],
  exports: [ProfilesComponent,DisplayProfilesComponent ]
})
export class ProfilesModule { }

