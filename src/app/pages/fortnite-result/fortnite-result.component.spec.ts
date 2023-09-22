import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteResultComponent } from './fortnite-result.component';

describe('FortniteResultComponent', () => {
  let component: FortniteResultComponent;
  let fixture: ComponentFixture<FortniteResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortniteResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
