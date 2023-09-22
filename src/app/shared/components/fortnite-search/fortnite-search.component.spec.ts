import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteSearchComponent } from './fortnite-search.component';

describe('FortniteSearchComponent', () => {
  let component: FortniteSearchComponent;
  let fixture: ComponentFixture<FortniteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortniteSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
