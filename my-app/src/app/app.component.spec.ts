import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component:AppComponent;
  let fixture:ComponentFixture<AppComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[],
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create the app', () => {    
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    const headerElement = fixture.nativeElement.querySelector('header')    
    expect(headerElement).toBeTruthy();
  })

  it('should have navigation', () => {
    const navigation = fixture.nativeElement.querySelector('app-navigation')        
    expect(navigation).toBeTruthy();
  })

  it('should have main', () => {
    const main = fixture.nativeElement.querySelector('main')    
    expect(main).toBeTruthy();
  })

});
