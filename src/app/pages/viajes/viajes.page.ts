import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {




  constructor(private menuController: MenuController,
              private alertController: AlertController){}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
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
}