//   File Name: Home.ts 
//      Author: Justin Ellery
// Description: Typescript file for my homepage of shoppinglist app
//  Student ID: 200197108
//        Date: 02-22-2017

import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // private variables to hold the list if items (array), and list title
  private items: Item[] = [];
  private listname: string = "";

  // default constructor
  constructor(public navCtrl: NavController) {

  }

  // Adds an item to the list
  private addItem(): void {
    this.items.push(new Item("Enter item", 0));
    console.log(this.items);
  }
  // Resets the entire homepage
  private reset(): void {
    let newItems: Item[] = [];
    this.items = [];
    this.listname = "";
  }

  // Increas the quantity of an item
  private increase(item: Item): void {
    item.quantity = item.quantity + 1;
  }
  // Decrease the quantity of an item
  private decrease(item: Item): void {
    if (item.quantity > 0)
      item.quantity = item.quantity - 1;
  }

}
