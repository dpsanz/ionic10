import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempInputPage } from './temp-input.page';

describe('TempInputPage', () => {
  let component: TempInputPage;
  let fixture: ComponentFixture<TempInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TempInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
