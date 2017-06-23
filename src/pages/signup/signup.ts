import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//apppages

import { BeerPage } from '../beer/beer';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signup: {fullname?: string, email?: string, password?: string} = {};
  submitted = false;
  alertMessage: any;

  constructor(public nav: NavController, 
  public navParams: NavParams, 
  public auth: AuthServiceProvider,
  public alertController: AlertController) {
  }

  onSignup(form) {
    this.submitted = true;
    if (form.valid) {      
      this.auth.LoadingControllerShow();
      this.auth.signUpWithEmail(this.signup).then(() => {
          this.SignupSuccess();
             this.auth.LoadingControllerDismiss();
        }).catch(
        (error) => {
       this.auth.LoadingControllerDismiss();
          this.SignUpError(error);
        }
      );
    }
  }

  SignupSuccess() {
    setTimeout(() => {
        this.nav.setRoot(BeerPage, {}, {animate: true, direction: 'forward'});
      }, 1000);    
  }
  
  SignUpError(error): void {
    switch (error.code) {
      case "auth/email-already-in-use":
          this.alertMessage = "The specified email is already in use!"
          break;
      case "auth/invalid-email":
          this.alertMessage = "The specified email is not valid!"
          break;
      case "auth/operation-not-allowed":
          this.alertMessage = "Your account has been disabled. Please contact support!"
          break;
      case "auth/weak-password":
          this.alertMessage = "Password should be at least 6 characters!"
          break;
    }
    let alert = this.alertController.create({
      title: 'Sign Up Failed',
      subTitle: this.alertMessage,
      buttons: ['Ok']
    });
    alert.present();
  }
}
