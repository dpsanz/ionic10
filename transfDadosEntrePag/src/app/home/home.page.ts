import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome='';
  telefone='';
  email='';

  constructor(public router: Router) {}

  abrirTela(){
    this.router.navigateByUrl(`/tela-confirmar/${this.nome}/${this.email}/${this.telefone}`)
  }

}
