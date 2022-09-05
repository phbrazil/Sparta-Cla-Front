import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarzoneResultComponent } from './warzone-result.component';

describe('WarzoneResultComponent', () => {
  let component: WarzoneResultComponent;
  let fixture: ComponentFixture<WarzoneResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarzoneResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarzoneResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
