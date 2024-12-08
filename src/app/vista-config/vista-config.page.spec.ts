import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaConfigPage } from './vista-config.page';

describe('VistaConfigPage', () => {
  let component: VistaConfigPage;
  let fixture: ComponentFixture<VistaConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
