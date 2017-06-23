import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarhomePage } from './barhome';

@NgModule({
  declarations: [
    BarhomePage,
  ],
  imports: [
    IonicPageModule.forChild(BarhomePage),
  ],
  exports: [
    BarhomePage
  ]
})
export class BarhomePageModule {}
