import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftdrinkPage } from './softdrink';

@NgModule({
  declarations: [
    SoftdrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(SoftdrinkPage),
  ],
  exports: [
    SoftdrinkPage
  ]
})
export class SoftdrinkPageModule {}
