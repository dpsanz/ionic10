import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  abrirTela(){
    this.router.navigateByUrl
    ('tela-confirmar/'+this.valorRange1+'/'+this.valorRange2+'/'+this.valorRange3+'/'+this.valorRange4)
  }

  valorRange1 = 0;
  valorRange2 = 0;
  valorRange3 = 0;
  valorRange4 = 0;

  onIonChange1(ev:RangeCustomEvent){
    this.valorRange1 =parseInt(ev.detail.value.toString())
  };
  onIonChange2(ev:RangeCustomEvent){
    this.valorRange2 =parseInt(ev.detail.value.toString())
  };
  onIonChange3(ev:RangeCustomEvent){
    this.valorRange3 =parseInt(ev.detail.value.toString())
  };
  onIonChange4(ev:RangeCustomEvent){
    this.valorRange4 =parseInt(ev.detail.value.toString())
  };


}
