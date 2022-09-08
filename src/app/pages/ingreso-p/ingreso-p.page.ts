import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ViajesPage } from '../viajes/viajes.page';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ingresi-p',
  templateUrl: './ingreso-p.page.html',
  styleUrls: ['./ingreso-p.page.scss'],
})
export class IngresoPPage implements OnInit {



 
   
  constructor(private menuController: MenuController,
              private loadingCtrl: LoadingController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Buscando Conductores...',
      duration: 3000,
    });

    loading.present();
  }





  usuario = {
    nombre:'',
    numero: '',
    inicio: '',
    destino: '',
    pago:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


  //método que muestra un mensaje con botón Ok
  async Despedida() {
    const alert = await this.alertController.create({
      header: 'Hasta Luego!',
      message: 'Ha cerrado exitosamente la sesión',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async auto() {
    const alert = await this.alertController.create({
      message: 'No se encontraron conductores',
      buttons: ['Inténtelo nuevamente'],
    });

    await alert.present();
  }



}
