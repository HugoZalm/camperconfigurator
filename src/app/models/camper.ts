import { Property } from './property';

export class Camper {

    public nummerplaat = '..-..-..';
    public price = 0;
    public addPrice = {
        extern: 0,
        intern: 0,
        installatie: 0
    };
    public bpm = 0;
    public extern: Property[] = [];
    public intern: Property[] = [];
    public installatie: Property[] = [];

    constructor() {
        this.initProperties();
    }

    initProperties() {
        this.extern.push(new Property('zijraam',750));
        this.extern.push(new Property('achterramen',1500));
        this.extern.push(new Property('dakrek',1000));
        this.extern.push(new Property('trekhaak',500));
        this.extern.push(new Property('fietsendrager',500));
        this.extern.push(new Property('dakraam',500));
        this.extern.push(new Property('luifel',750));
        this.intern.push(new Property('passagiersstoel',0));
        this.intern.push(new Property('passagiersairbag',0));
        this.intern.push(new Property('dakventilator',500));
        this.intern.push(new Property('isolatie',3500));
        this.intern.push(new Property('inbouw',2500));
        this.intern.push(new Property('matrassen',1000));
        this.intern.push(new Property('gordijntjes',150));
        this.intern.push(new Property('horren',300));
        this.installatie.push(new Property('electriciteit',1000));
        this.installatie.push(new Property('gas',50));
        this.installatie.push(new Property('schoonwatertank',100));
        this.installatie.push(new Property('vuilwatertank',50));
        this.installatie.push(new Property('zonnepanelen',1000));
        this.installatie.push(new Property('oplader',200));
        this.installatie.push(new Property('omvormer',200));
        this.installatie.push(new Property('huishoudaccu',200));
        this.installatie.push(new Property('usbpoorten',50));
        this.installatie.push(new Property('koelkast230',900));
        this.installatie.push(new Property('koelkast12230',900));
        this.installatie.push(new Property('koelkast12230gas',900));
        this.installatie.push(new Property('fornuisgas',500));
        this.installatie.push(new Property('fornuiselectrisch',500));
        this.installatie.push(new Property('fornuisgaslos',250));
        this.installatie.push(new Property('fornuisanders',250));
    }
}
