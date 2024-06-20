import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  valorRange1: any;
  valorRange2: any;
  valorRange3: any;
  valorRange4: any;
  media = 0;
  abacaxiMin = 22;
  abacaxiMax = 32;
  abacaxi = false
  bananaMin = 24;
  bananaMax = 30;
  banana = false
  cactoMin = 18;
  cactoMax = 35;
  cacto = false
  damascoMin = 21;
  damascoMax = 27;
  damasco = false
  embaubaMin = 20;
  embaubaMax = 30;
  embauba = false
  feijaoMin = 18;
  feijaoMax = 30;
  feijao = false
  goiabaMin = 23;
  goiabaMax = 28;
  goiaba = false
  trigoMin = 15;
  trigoMax = 25;
  trigo = false
  uvaMin = 20;
  uvaMax = 30;
  uva = false
  tamaraMin = 25;
  tamaraMax = 35;
  tamara = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valorRange1 = this.activatedRoute.snapshot.paramMap.get('valorRange1');
    this.valorRange2 = this.activatedRoute.snapshot.paramMap.get('valorRange2');
    this.valorRange3 = this.activatedRoute.snapshot.paramMap.get('valorRange3');
    this.valorRange4 = this.activatedRoute.snapshot.paramMap.get('valorRange4');
    this.calcMedia();
    this.culturaIdeal();
  }

  calcMedia(){
    this.media = (parseInt(this.valorRange1) + parseInt(this.valorRange2) + parseInt(this.valorRange3) + parseInt(this.valorRange4))/4
  }

  culturaIdeal(){
    if(this.media >= this.abacaxiMin && this.media <= this.abacaxiMax){
      this.abacaxi = true;
    }
    if(this.media >= this.bananaMin && this.media <= this.bananaMax){
      this.banana = true;
    }
    if(this.media >= this.cactoMin && this.media <= this.cactoMax){
      this.cacto = true;
    }
    if(this.media >= this.damascoMin && this.media <= this.damascoMax){
      this.damasco = true;
    }
    if(this.media >= this.embaubaMin && this.media <= this.embaubaMax){
      this.embauba = true;
    }
    if(this.media >= this.feijaoMin && this.media <= this.feijaoMax){
      this.feijao = true;
    }
    if(this.media >= this.goiabaMin && this.media <= this.goiabaMax){
      this.goiaba = true;
    }
    if(this.media >= this.trigoMin && this.media <= this.trigoMax){
      this.trigo = true;
    }
    if(this.media >= this.uvaMin && this.media <= this.uvaMax){
      this.uva = true;
    }
    if(this.media >= this.tamaraMin && this.media <= this.tamaraMax){
      this.tamara = true;
    }
  }
}
