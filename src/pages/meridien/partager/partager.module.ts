import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartagerPage } from './partager';

@NgModule({
  declarations: [
    PartagerPage,
  ],
  imports: [
    IonicPageModule.forChild(PartagerPage),
  ],
  exports: [
    PartagerPage
  ]
})
export class PartagerPageModule {}
