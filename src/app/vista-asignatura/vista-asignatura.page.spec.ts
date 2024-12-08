import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaAsignaturaPage } from './vista-asignatura.page';

describe('VistaAsignaturaPage', () => {
  let component: VistaAsignaturaPage;
  let fixture: ComponentFixture<VistaAsignaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
