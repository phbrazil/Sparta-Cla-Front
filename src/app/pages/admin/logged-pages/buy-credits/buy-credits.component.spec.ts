import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCreditsComponent } from './buy-credits.component';

describe('BuyCreditsComponent', () => {
  let component: BuyCreditsComponent;
  let fixture: ComponentFixture<BuyCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('Testando customDimensionsData', () => {

    spyOn(gmtError, "hashUser");

    let customData = {
      erro_objError: {},
      erro_statusCode: 422,
      erro_message: "erro de negocio",
      erro_messageError: "erro teste",
      erro_name: "unauthorized",
      erro_url: "api/teste"
    } as CustomDataModel;

   let res = gmtError.customErrorDimensions(customData);

    expect(res.erro_statusCode).toEqual(422);
  });
});
