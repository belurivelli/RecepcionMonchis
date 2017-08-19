import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { VistaSimplePedidoPage } from '../vista-simple-pedido/vista-simple-pedido';
import { QrPage } from '../qr/qr';
import { PedidosPage } from '../pedidos/pedidos';
import { CocinaPage } from '../cocina/cocina';
/**
 * Generated class for the VistadetallepedidoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vistadetallepedido',
  templateUrl: 'vistadetallepedido.html',
})
export class VistadetallepedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VistadetallepedidoPage');
  }
  loadDelivery(){
  this.navCtrl.push(DeliveryPage,{

  })
  }
  loadSimple(){
  this.navCtrl.push(VistaSimplePedidoPage,{

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
