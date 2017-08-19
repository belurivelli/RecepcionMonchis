import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VistaSimplePedidoPage } from '../vista-simple-pedido/vista-simple-pedido';
import { PedidosPage } from '../pedidos/pedidos';


/**
 * Generated class for the CocinaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cocina',
  templateUrl: 'cocina.html',
})
export class CocinaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CocinaPage');
  }

  loadVistaSimplePedido(){
  this.navCtrl.push(VistaSimplePedidoPage,{

  })
  }

  loadPedidos(){
  this.navCtrl.push(PedidosPage,{

  })
  }
}
