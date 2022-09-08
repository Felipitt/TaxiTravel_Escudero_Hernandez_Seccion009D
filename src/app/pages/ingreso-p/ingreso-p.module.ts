import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoPPageRoutingModule } from './ingreso-p-routing.module';

import { IngresoPPage } from './ingreso-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoPPageRoutingModule
  ],
  declarations: [IngresoPPage]
})
export class IngresoPPageModule {}
