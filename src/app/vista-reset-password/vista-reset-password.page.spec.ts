import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaResetPasswordPage } from './vista-reset-password.page';

describe('VistaResetPasswordPage', () => {
  let component: VistaResetPasswordPage;
  let fixture: ComponentFixture<VistaResetPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
