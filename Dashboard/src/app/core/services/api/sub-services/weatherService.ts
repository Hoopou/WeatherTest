import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { WeatherData } from 'src/app/core/models/weather-data.model';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    settingsPath: string = environment.API_URL + "weather";

    constructor(
        private http: HttpClient
        ) { }

    getList(): Observable<WeatherData> {
        return this.http.get<WeatherData>(this.settingsPath);
    }
}
