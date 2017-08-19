import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { CocinaPage } from '../pages/cocina/cocina';
import { VistaSimplePedidoPage } from '../pages/vista-simple-pedido/vista-simple-pedido';
import { DeliveryPage } from '../pages/delivery/delivery';
import { VistadetallepedidoPage } from '../pages/vistadetallepedido/vistadetallepedido';
import { QrPage } from '../pages/qr/qr';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2ef10a21'
  }
};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PedidosPage,
    CocinaPage,
    VistaSimplePedidoPage,
    DeliveryPage,
    VistadetallepedidoPage,
    QrPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PedidosPage,
    CocinaPage,
    VistaSimplePedidoPage,
    DeliveryPage,
    VistadetallepedidoPage,
    QrPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
