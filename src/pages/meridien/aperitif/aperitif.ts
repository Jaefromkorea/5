import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VinPage } from '../vin/vin';
/**
 * Generated class for the AperitifPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-aperitif',
  templateUrl: 'aperitif.html',
})
export class AperitifPage {
drinks = [
  {
    type: 'Beers',
    list: [
      { name: 'Heineken', explanation: 'wow',   price: 3.5, isChecked: false, quantity: 0 },
      { name: 'Pelfort', explanation: 'wow',    price: 3.5, isChecked: false, quantity: 0 }
    ]
  },
  {
    type: 'Cocktails',
    list: [
      { name: 'Pina Colada', explanation: 'wow',     price: 5, isChecked: false, quantity: 0 },
      { name: 'Mojito',   explanation: 'wow',        price: 5, isChecked: false, quantity: 0 }
    ]
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AperitifPage');
  }
a(){
  this.navCtrl.push(VinPage)


}
sendOrder() {
    let items_ordered=[];
    this.drinks.forEach((o) => {
      o.list.forEach((d) => {
        (+d.quantity) > 0 && items_ordered.push({name: d.name, price: d.price, quantity: +(d.quantity)});
      });
    });
    this.navCtrl.push(VinPage)// CUSTOMIZED FOR TESTING PURPOSES
  }
  
  checkOrder() {
    //return !document.querySelectorAll('.checkbox-checked').length;
    let qty_total:number = 0;
    this.drinks.forEach((o) => {
      o.list.forEach((d) => {
        qty_total += (+d.quantity);
      })
    })
    return qty_total === 0;
  }
  

}
