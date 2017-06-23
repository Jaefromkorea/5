import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigestifPage } from './digestif';

@NgModule({
  declarations: [
    DigestifPage,
  ],
  imports: [
    IonicPageModule.forChild(DigestifPage),
  ],
  exports: [
    DigestifPage
  ]
})
export class DigestifPageModule {}
