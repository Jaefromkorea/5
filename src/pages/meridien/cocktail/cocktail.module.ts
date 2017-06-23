import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CocktailPage } from './cocktail';

@NgModule({
  declarations: [
    CocktailPage,
  ],
  imports: [
    IonicPageModule.forChild(CocktailPage),
  ],
  exports: [
    CocktailPage
  ]
})
export class CocktailPageModule {}
