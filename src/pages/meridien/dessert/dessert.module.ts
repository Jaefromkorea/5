import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DessertPage } from './dessert';

@NgModule({
  declarations: [
    DessertPage,
  ],
  imports: [
    IonicPageModule.forChild(DessertPage),
  ],
  exports: [
    DessertPage
  ]
})
export class DessertPageModule {}
