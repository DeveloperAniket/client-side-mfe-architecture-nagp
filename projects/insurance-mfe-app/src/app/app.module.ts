import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceDetailsModule } from './insurance-details/insurance-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InsuranceDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
