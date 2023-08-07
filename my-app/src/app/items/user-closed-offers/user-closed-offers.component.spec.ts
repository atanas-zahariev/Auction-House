import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClosedOffersComponent } from './user-closed-offers.component';

describe('UserClosedOffersComponent', () => {
  let component: UserClosedOffersComponent;
  let fixture: ComponentFixture<UserClosedOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserClosedOffersComponent]
    });
    fixture = TestBed.createComponent(UserClosedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
