import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';
import { CocinaPage } from '../cocina/cocina';


/**
 * Generated class for the DeliveryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
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
