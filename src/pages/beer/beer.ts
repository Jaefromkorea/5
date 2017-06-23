import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { VinPage } from '../meridien/vin/vin';
/**
 * Generated class for the BeerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-beer',
  templateUrl: 'beer.html',
})
export class BeerPage {
drinks1 = [
  {
    type: 'Beers',
    list: [
      { name: 'Heineken',    price: 3.5, isChecked: false, quantity: 0 },
      { name: 'Pelfort',     price: 3.5, isChecked: false, quantity: 0 }
    ]
  },
  {
    type: 'Cocktails',
    list: [
      { name: 'Pina Colada',      price: 5, isChecked: false, quantity: 0 },
      { name: 'Mojito',           price: 5, isChecked: false, quantity: 0 }
    ]
  }];

drinks2 = [
  {
    type: 'Cocktails',
    list: [
      { name: 'Pina Colada',      price: 5, isChecked: false, quantity: 0 },
      { name: 'Mojito',           price: 5, isChecked: false, quantity: 0 },
      { name: 'Sex on the Beach', price: 5, isChecked: false, quantity: 0 }
    ]
  },
  {
    type: 'Shots',
    list: [
      { name: 'Vodka',     price: 3, isChecked: false, quantity: 0 },
      { name: 'Tequila',   price: 3, isChecked: false, quantity: 0 },
      { name: 'Jagerbomb', price: 3, isChecked: false, quantity: 0 }
    ]
  } ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendOrder() {
    let items_ordered=[];
    this.drinks1.forEach((o) => {
      o.list.forEach((d) => {
        (+d.quantity) > 0 && items_ordered.push({name: d.name, price: d.price, quantity: +(d.quantity)});
      });
    });
     this.drinks2.forEach((o) => {
      o.list.forEach((d) => {
        (+d.quantity) > 0 && items_ordered.push({name: d.name, price: d.price, quantity: +(d.quantity)});
      });
    });
    this.navCtrl.push(VinPage)// CUSTOMIZED FOR TESTING PURPOSES
  }

    checkOrder() {
    //return !document.querySelectorAll('.checkbox-checked').length;
    let qty_total:number = 0;
    this.drinks1.forEach((o) => {
      o.list.forEach((d) => {
        qty_total += (+d.quantity);
      })
    })
     this.drinks2.forEach((o) => {
      o.list.forEach((d) => {
        qty_total += (+d.quantity);
      })
    })
    return qty_total === 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeerPage');
  }

}
