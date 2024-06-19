import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-input',
  templateUrl: './temp-input.page.html',
  styleUrls: ['./temp-input.page.scss'],
})
export class TempInputPage {
  temperatures: number[] = [20, 20, 20, 20]; // Valores iniciais arbitrários

  constructor(private router: Router) {}

  suggestCrops() {
    const averageTemperature = this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    this.router.navigate(['/crop-suggestions'], {
      queryParams: { averageTemperature }
    });
  }
}
