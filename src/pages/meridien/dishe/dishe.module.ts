import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DishePage } from './dishe';

@NgModule({
  declarations: [
    DishePage,
  ],
  imports: [
    IonicPageModule.forChild(DishePage),
  ],
  exports: [
    DishePage
  ]
})
export class DishePageModule {}
