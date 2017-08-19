import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CocinaPage } from './cocina';

@NgModule({
  declarations: [
    CocinaPage,
  ],
  imports: [
    IonicPageModule.forChild(CocinaPage),
  ],
})
export class CocinaPageModule {}
