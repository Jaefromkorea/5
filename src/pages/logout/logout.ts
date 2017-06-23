import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';


import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LogoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public nav: NavController, 
  public navParams: NavParams,
  public menu: MenuController) {
  }

  
  doLogin(form) {
    this.nav.push(LoginPage, {}, {animate: true, direction: 'reverse'});
  }

  doSignup() {
    this.nav.push(SignupPage, {}, {animate: true, direction: 'reverse'});
  }
  
  ionViewDidEnter() {
    //this.menu.enable(false);
    //this.menu.swipeEnable(false);
  }

  ionViewWillLeave() {
    //this.menu.enable(true);
    //this.menu.swipeEnable(true);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
