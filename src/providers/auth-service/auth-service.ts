import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoadingController } from 'ionic-angular';

import { Storage } from '@ionic/storage';


import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthServiceProvider {

  private authState;
  private userdata;
  private loading: any;
  private userauth;
  
  public user;



  constructor(public http: Http,
    public storage: Storage,
    public afAuth: AngularFireAuth, 
    public db: AngularFireDatabase,
    public loadingCtrl: LoadingController) {


      this.authState = afAuth.authState;

    this.userdata = firebase.database().ref('/users/');
    
    
    console.log('Hello AuthServiceProvider Provider');
  }
  
 get authenticated(): boolean {
    return this.authState !== null;
  }

LoadingControllerShow() {
    this.loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Please wait...',
    });
    this.loading.present();
  }
  LoadingControllerDismiss() {
    this.loading.dismiss();
}


signInWithEmail(credentials): firebase.Promise<any> {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((authData) => {
        this.userauth = authData;
        this.getUserData();
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }

signUpWithEmail(credentials): firebase.Promise<any> {
    return new Promise((resolve: () => void, reject: (reason: Error) => void) => {
      this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((authData) => {
        this.userauth = authData;
        this.user = credentials;
        this.createInitialSetup();
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }  


//personal profile
getUserData() { 
    const thisuser$ : FirebaseObjectObservable<any> = this.db.object('/users/' + this.userauth.uid); 
    thisuser$.subscribe((val) => {
      this.user = val;
    });
  }
// sign in -Creat user
createInitialSetup() {
    this.createUserProfile();
  
  }
createUserProfile() {

   // Set basic user profile defaults
    var profile = {
      datecreated: firebase.database['ServerValue']['TIMESTAMP'],

      defaultdate: 'None',
      email: this.user.email,
      fullname: this.user.fullname,
      nickname: this.user.fullname,
      profilepic: 'http://www.gravatar.com/avatar?d=mm&s=140',
    };
    this.user.defaultdate = profile.defaultdate;

    
    // Save user profile
    this.userdata.child(this.userauth.uid).update(profile);
  }

  signOut(): void {
    this.authState = null;
    this.user = null;
    this.userauth = null;
    this.userdata = null;
  }


}
