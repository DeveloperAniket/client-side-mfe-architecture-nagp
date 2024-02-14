import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceDetailsComponent } from './insurance-details.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InsuranceDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: "",component:InsuranceDetailsComponent, pathMatch:'full'}
    ])
  ]
})
export class InsuranceDetailsModule { }
