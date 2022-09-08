import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario = {
    email: ''

  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  //método que muestra un mensaje con botón Ok
  async recuperar() {
    const alert = await this.alertController.create({
      header: 'Correo enviado!',
      message: 'Recibira un correo de confirmación',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
