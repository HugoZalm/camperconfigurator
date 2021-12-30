export class Property {
    public available: boolean;
    public add: boolean;
    public addPrice: number;

    constructor(
        public label: string,
        public price: number
    ){
        this.available = false;
        this.add = false;
        this.addPrice = 0;
    }
}
