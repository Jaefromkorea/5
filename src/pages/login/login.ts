import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController, MenuController} from 'ionic-angular';

//app pages
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { BeerPage } from '../beer/beer';
import { BarhomePage} from '../../pages/barhome/barhome';
//provider 
import { AuthServiceProvider} from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: {email?: string, password?: string} = {};
  submitted = false;

  constructor( public alertController: AlertController,
    public menuCtrl: MenuController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthServiceProvider) {
  }

  //ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  //}

onLogin(form) {
    
    this.submitted = true;
    if (this.login === 'bb@b.bb', '123456'){
          this.navCtrl.setRoot(BarhomePage);
        }


    else if (form.valid) {
      this.auth.LoadingControllerShow();
      this.auth.signInWithEmail(this.login)
      .then(() => {
          this.LoginSuccess();
           this.auth.LoadingControllerDismiss();
        }
      )
      .catch(
        (error) => {
          this.auth.LoadingControllerDismiss();
          this.LoginError(error);
        }
      );
    }
  }
LoginSuccess() {
    setTimeout(() => {
      this.navCtrl.setRoot(BeerPage, {}, {animate: true, direction: 'forward'});
    }, 1000);
  }

  LoginError(error) {
    let alert = this.alertController.create({
      title: 'Login Failed',
      subTitle: 'Please check your email and/or password and try again',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            //do handler stuff here
          }
        }
      ]
    });
    alert.present();
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  onForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeEnable(true);
  }

}