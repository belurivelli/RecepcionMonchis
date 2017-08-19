import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CocinaPage } from '../cocina/cocina';
import { DeliveryPage } from '../delivery/delivery';
/**
 * Generated class for the PedidosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  loadCocina(){
  this.navCtrl.push(CocinaPage,{

  })
  }
  loadDelivery(){
  this.navCtrl.push(DeliveryPage,{

  })
  }
}
