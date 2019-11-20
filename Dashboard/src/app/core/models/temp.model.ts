export class Temp {
    constructor(
        public day:   number,
        public min:   number,
        public max:   number,
        public night: number,
        public eve:   number,
        public morn:  number,
    ) { }

    public static empty(): Temp {
        return new Temp(0, 0, 0, 0, 0, 0);
    }

}