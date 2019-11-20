export class Weather {
    constructor(
        public id:          number,
        public main:        string,
        public description: string,
        public icon:        string,
    ) { }

    public static empty(): Weather {
        return new Weather(0, "", "", "");
    }

}