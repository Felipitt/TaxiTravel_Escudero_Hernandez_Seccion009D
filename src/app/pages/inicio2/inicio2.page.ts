import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})
export class Inicio2Page implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario = {
    nombre:'',
    email: '',
    password: ''

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

}
