export class Coord{
    constructor(
        public lon: number,
        public lat: number,
    ){}

    public static empty(): Coord{
        return new Coord(0, 0);
    }

}