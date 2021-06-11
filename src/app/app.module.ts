import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EligibilityoffersComponent } from './eligibilityoffers/eligibilityoffers.component';




@NgModule({
  declarations: [
    AppComponent,
    CreditcardComponent,
    EligibilityoffersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
