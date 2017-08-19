import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { VistadetallepedidoPage } from '../vistadetallepedido/vistadetallepedido';
import { QrPage } from '../qr/qr';
import { PedidosPage } from '../pedidos/pedidos';
import { CocinaPage } from '../cocina/cocina';
/**
 * Generated class for the VistaSimplePedidoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vista-simple-pedido',
  templateUrl: 'vista-simple-pedido.html',
})
export class VistaSimplePedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistaSimplePedidoPage');
  }
  loadDelivery(){
  this.navCtrl.push(DeliveryPage,{

  })
  }
  loadDetalle(){
  this.navCtrl.push(VistadetallepedidoPage,{

  })
  }
  loadQrPage(){
  this.navCtrl.push(QrPage,{

  })
  }

  loadCocina(){
  this.navCtrl.push(CocinaPage,{

  })
  }

  loadPedidos(){
  this.navCtrl.push(PedidosPage,{

  })
  }

}
