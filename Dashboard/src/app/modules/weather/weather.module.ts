import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './views/weather/weather.component';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    WeatherRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class WeatherModule { }
