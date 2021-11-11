import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicComponent } from './modal-public.component';

describe('ModalPublicComponent', () => {
  let component: ModalPublicComponent;
  let fixture: ComponentFixture<ModalPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
