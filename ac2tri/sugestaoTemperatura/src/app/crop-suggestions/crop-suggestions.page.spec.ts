import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CropSuggestionsPage } from './crop-suggestions.page';

describe('CropSuggestionsPage', () => {
  let component: CropSuggestionsPage;
  let fixture: ComponentFixture<CropSuggestionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CropSuggestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
