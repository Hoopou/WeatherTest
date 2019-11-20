import { Injectable } from '@angular/core';
import { WeatherService } from './sub-services/weatherService';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public readonly weatherService: WeatherService    
  ) { }
}
