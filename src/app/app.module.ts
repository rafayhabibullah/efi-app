import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // for ngModel
import { AppComponent } from './app.component';

import { DimensionsComponent } from './components/dimensions/dimensions.component';
import { PickupRateComponent } from './components/pickup-rate/pickup-rate.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalculatorService } from './services/calculator.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

  
@NgModule({
  declarations: [
    AppComponent,
    DimensionsComponent,
    PickupRateComponent,
    HomePageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
