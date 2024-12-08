import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaQRPage } from './vista-qr.page';

describe('VistaQRPage', () => {
  let component: VistaQRPage;
  let fixture: ComponentFixture<VistaQRPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
