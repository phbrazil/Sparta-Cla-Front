import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTournamentComponent } from './confirm-tournament.component';

describe('ConfirmTournamentComponent', () => {
  let component: ConfirmTournamentComponent;
  let fixture: ComponentFixture<ConfirmTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
