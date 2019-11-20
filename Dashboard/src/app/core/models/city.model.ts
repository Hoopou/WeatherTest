import { Coord } from './coord.model';

export class City{
    constructor(
        public id:         number,
        public name:       string,
        public coord:      Coord,
        public country:    string,
        public population: number,
    ){}

    public static empty(): City{
        return new City(0, "", Coord.empty(), "", 0);
    }

}