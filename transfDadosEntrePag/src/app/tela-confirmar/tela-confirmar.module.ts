import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaConfirmarPageRoutingModule } from './tela-confirmar-routing.module';

import { TelaConfirmarPage } from './tela-confirmar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaConfirmarPageRoutingModule
  ],
  declarations: [TelaConfirmarPage]
})
export class TelaConfirmarPageModule {}
