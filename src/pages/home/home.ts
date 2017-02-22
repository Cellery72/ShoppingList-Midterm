import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 private items: Item[] = [new Item("oranges",17), new Item("apples",12), new Item("beers",24), new Item("pizzas",10), new Item("Grapes",431)];

  constructor(public navCtrl: NavController) {
    
  }

}
