import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOfferComponent } from './close-offer.component';

describe('CloseOfferComponent', () => {
  let component: CloseOfferComponent;
  let fixture: ComponentFixture<CloseOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseOfferComponent]
    });
    fixture = TestBed.createComponent(CloseOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
