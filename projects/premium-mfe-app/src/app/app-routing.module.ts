import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumModule } from './premium/premium.module';
import { PremiumComponent } from './premium/premium.component';

const routes: Routes = [
  { 
    path:"",
    redirectTo:"premium-mfe",
    pathMatch:'full'

  },
  {
      path:"premium-mfe",
      component:PremiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
