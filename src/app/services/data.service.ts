import { Injectable } from '@angular/core';
import { Camper } from '../models/camper';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private camper = new Camper();

  constructor() {
    // this.camper = this.initCamper();
  }

  public getCamper() {
    return this.camper;
  }

  private initCamper() {
    this.camper = new Camper();
  }
}
