import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoCPageRoutingModule } from './ingreso-c-routing.module';

import { IngresoCPage } from './ingreso-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoCPageRoutingModule
  ],
  declarations: [IngresoCPage]
})
export class IngresoCPageModule {}
