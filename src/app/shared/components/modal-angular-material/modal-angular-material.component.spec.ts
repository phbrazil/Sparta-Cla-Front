import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAngularMaterialComponent } from './modal-angular-material.component';

describe('ModalAngularMaterialComponent', () => {
  let component: ModalAngularMaterialComponent;
  let fixture: ComponentFixture<ModalAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAngularMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
