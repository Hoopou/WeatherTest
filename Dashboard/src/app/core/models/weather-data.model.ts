import { Data } from './data.model';

export class WeatherData{

    constructor(
        public data       :Data,
    ){}

    public static empty(): WeatherData{
        return new WeatherData(Data.empty());
    }

}