import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camper } from '../models/camper';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public camper: Camper;
  public total = 0;
  public addPrice = 0;
  public show = {
    price: false,
    extern: false,
    intern: false,
    installatie: false
  };
  public types = ['extern', 'intern', 'installatie'];
  public form = new FormGroup({
    price: new FormControl(0),
    bpm: new FormControl(0)
  });



  constructor(private data: DataService) {}

  ngOnInit() {
    this.camper = this.data.getCamper();
    this.calculateTotal();
  }

  public toggleAvailable(property, type: string) {
    property.available = !property.available;
    this.calculateAddPrice(property, type);
  }

  public toggleAdd(property, type: string) {
    property.add = !property.add;
    this.calculateAddPrice(property, type);
  }

  public toggle(type) {
    this.show[type] = !this.show[type];
  }

  public resetPrices() {
    this.camper.price = Number(this.form.controls.price.value);
    this.camper.bpm = Number(this.form.controls.bpm.value);
    this.calculateTotal();
  }

  private calculateAddPrice(property, type) {
    if (property.add && !property.available && property.addPrice !== property.price) {
      property.addPrice = property.price;
      this.camper.addPrice[type] += property.price;
    } else if (property.add && property.addPrice === property.price) {
      property.addPrice = 0;
      this.camper.addPrice[type] -= property.price;
    } else if (!property.add && property.addPrice !== 0) {
      property.addPrice = 0;
      this.camper.addPrice[type] -= property.price;
    }
    this.calculateTotal();
  }

  private calculateTotal() {
    this.addPrice = this.camper.addPrice.extern + this.camper.addPrice.intern + this.camper.addPrice.installatie;
    this.total = this.camper.price + this.camper.bpm + this.addPrice;
  }

}
