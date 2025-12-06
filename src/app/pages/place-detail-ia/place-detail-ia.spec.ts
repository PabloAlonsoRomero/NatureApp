import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailIa } from './place-detail-ia';

describe('PlaceDetailIa', () => {
  let component: PlaceDetailIa;
  let fixture: ComponentFixture<PlaceDetailIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceDetailIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceDetailIa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
