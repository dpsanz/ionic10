import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaConfirmarPage } from './tela-confirmar.page';

describe('TelaConfirmarPage', () => {
  let component: TelaConfirmarPage;
  let fixture: ComponentFixture<TelaConfirmarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConfirmarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
