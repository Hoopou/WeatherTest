import { City } from './city.model';
import { List } from './list.model';

export class Data{
    constructor(
        public city:    City,
        public cod:     string,
        public message: number,
        public cnt:     number,
        public list:    List[] = [],
    ){}

    public static empty(): Data{
        return new Data(City.empty(), "", 0,0, []);
    }

}