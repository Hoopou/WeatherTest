import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './views/weather/weather.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Postes'
    },
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
