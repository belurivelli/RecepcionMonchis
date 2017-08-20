import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PedidosIkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos-ik',
  templateUrl: 'pedidos-ik.html',
})

export class PedidosIkPage {

  pedidos_list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pedidos_list.push(1);
    this.pedidos_list.push(1);
    this.pedidos_list.push(1);
    this.pedidos_list.push(1);
    this.pedidos_list.push(1);
    this.pedidos_list.push(1);
    this.pedidos_list.push(1);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosIkPage');
    console.log(this.pedidos_list);
  }

}
