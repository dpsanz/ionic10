const routes: Routes = [
  { path: '', redirectTo: 'temp-input', pathMatch: 'full' },
  { path: 'temp-input', loadChildren: () => import('./temp-input/temp-input.module').then(m => m.TempInputPageModule) },
  { path: 'crop-suggestions', loadChildren: () => import('./crop-suggestions/crop-suggestions.module').then(m => m.CropSuggestionsPageModule) }
];
