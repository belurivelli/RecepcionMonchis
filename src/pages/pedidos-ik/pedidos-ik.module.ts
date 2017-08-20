import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosIkPage } from './pedidos-ik';

@NgModule({
  declarations: [
    PedidosIkPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosIkPage),
  ],
})
export class PedidosIkPageModule {}
