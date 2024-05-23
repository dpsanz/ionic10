import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaConfirmarPage } from './tela-confirmar.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConfirmarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaConfirmarPageRoutingModule {}
