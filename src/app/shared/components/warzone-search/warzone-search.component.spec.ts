import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarzoneSearchComponent } from './warzone-search.component';

describe('WarzoneSearchComponent', () => {
  let component: WarzoneSearchComponent;
  let fixture: ComponentFixture<WarzoneSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarzoneSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarzoneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
