import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomNavBarComponent } from './containers/default-layout/custom-nav-bar.component';


const routes: Routes = [
  {
    path: '',
    component: CustomNavBarComponent,
    data: {
      title: 'Weather'
    },
    children: [
      {
        path:'weather',
        loadChildren: './modules/weather/weather.module#WeatherModule',
        pathMatch: 'prefix'
      },
      {
        path:'',
        redirectTo: 'weather',
        pathMatch: 'full'
      },
      // {
      //   path:'**',
      //   redirectTo: 'weather',
      //   pathMatch: 'prefix'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
