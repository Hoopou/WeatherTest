import { Temp } from './temp.model';
import { Weather } from './weather.model';

export class List {
    constructor(
        public dt: number,
        public temp: Temp,
        public pressure: number,
        public humidity: number,
        public weather: Weather[] = [],
        public speed: number,
        public deg: number,
        public clouds: number,
        public rain?: number,
    ) { }

    public static empty(): List {
        return new List(0, Temp.empty(), 0, 0, [], 0, 0, 0, 0);
    }

}