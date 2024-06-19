import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropSuggestionsPage } from './crop-suggestions.page';

const routes: Routes = [
  {
    path: '',
    component: CropSuggestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropSuggestionsPageRoutingModule {}
