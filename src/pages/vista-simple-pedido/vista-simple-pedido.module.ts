import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VistaSimplePedidoPage } from './vista-simple-pedido';

@NgModule({
  declarations: [
    VistaSimplePedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(VistaSimplePedidoPage),
  ],
})
export class VistaSimplePedidoPageModule {}
