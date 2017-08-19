import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidosPage } from '../pedidos/pedidos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  load(){
  this.navCtrl.push(PedidosPage,{

  })
  }
}
