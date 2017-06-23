import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AperitifPage } from './aperitif';

@NgModule({
  declarations: [
    AperitifPage,
  ],
  imports: [
    IonicPageModule.forChild(AperitifPage),
  ],
  exports: [
    AperitifPage
  ]
})
export class AperitifPageModule {}
