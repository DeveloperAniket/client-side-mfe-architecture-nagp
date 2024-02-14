import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiumComponent } from './premium.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PremiumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
     { path: "",component:PremiumComponent, pathMatch:'full'}
    ])
  ]
})
export class PremiumModule { }
