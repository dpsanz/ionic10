import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  nome:any;
  email:any;
  telefone:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.telefone = this.activatedRoute.snapshot.paramMap.get('telefone');
  }

}
