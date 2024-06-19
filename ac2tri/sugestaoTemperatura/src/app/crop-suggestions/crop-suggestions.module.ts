import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crop-suggestions',
  templateUrl: './crop-suggestions.page.html',
  styleUrls: ['./crop-suggestions.page.scss'],
})
export class CropSuggestionsPage implements OnInit {
  averageTemperature: number;
  suggestedCrops: string[];

  crops = [
    { name: 'Morango', minTemp: 15, maxTemp: 25 },
    { name: 'Uva', minTemp: 20, maxTemp: 30 },
    { name: 'Laranja', minTemp: 15, maxTemp: 30 },
    { name: 'Batata', minTemp: 10, maxTemp: 20 },
    { name: 'Café', minTemp: 18, maxTemp: 24 },
    { name: 'Milho', minTemp: 18, maxTemp: 24 },
    { name: 'Trigo', minTemp: 10, maxTemp: 25 },
    { name: 'Tomate', minTemp: 20, maxTemp: 30 },
    { name: 'Soja', minTemp: 20, maxTemp: 30 },
    { name: 'Arroz', minTemp: 20, maxTemp: 35 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.averageTemperature = params['averageTemperature'];
      this.suggestCrops();
    });
  }

  suggestCrops() {
    this.suggestedCrops = this.crops
      .filter(crop => this.averageTemperature >= crop.minTemp && this.averageTemperature <= crop.maxTemp)
      .map(crop => crop.name);
  }
}
