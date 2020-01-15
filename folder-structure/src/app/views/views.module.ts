import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class ViewsModule { }
