import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { LoginComponent } from './login.component';
import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let mockAuthService: any;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  @NgModule()
  class FixNavigationTriggeredOutsideAngularZoneNgModule {
    constructor(_router: Router) {
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({

      declarations: [LoginComponent],

      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        FixNavigationTriggeredOutsideAngularZoneNgModule
      ],

      schemas: [NO_ERRORS_SCHEMA],

      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    });


    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy()
  })

  it('should have email input inside form', () => {
    const email = fixture.nativeElement.querySelectorAll('input')[0];
    expect(email).toBeTruthy()
  })

  it('should have password input inside form', () => {
    const password = fixture.nativeElement.querySelectorAll('input')[1];
    expect(password).toBeTruthy()
  })

  it('should have submit input inside form', () => {
    const button = fixture.nativeElement.querySelectorAll('input')[2];
    expect(button).toBeTruthy()
  })

  it('should  change email and password values', fakeAsync(() => {
    const email: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const password: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];
    const emailValue = 'peter@abv.bg'
    const passwordValue = '123456'

    email.value = emailValue;
    password.value = passwordValue;

    email.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))

    tick()
    fixture.detectChanges();

    expect(email.value).toEqual(emailValue)
    expect(password.value).toEqual(passwordValue)
  }))

  it('should  call onSubmit ', fakeAsync(() => {
    const form = fixture.debugElement.query(By.css('form'))
    const func = spyOn(component, 'onSubmit');

    fixture.detectChanges();

    form.triggerEventHandler('ngSubmit', null)
    tick()
    fixture.detectChanges();

    expect(func).toHaveBeenCalled();
  }))

  it('should call login when form event fire', fakeAsync(() => {
    const form = fixture.debugElement.query(By.css('form'))
    const email: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[0];
    const password: HTMLInputElement = fixture.nativeElement.querySelectorAll('input')[1];
    const emailValue = 'peter@abv.bg'
    const passwordValue = '123456'
    
    authService.login.and.returnValue(of(true))

    fixture.detectChanges()

    email.value = emailValue;
    password.value = passwordValue;

    email.dispatchEvent(new Event('input'))
    password.dispatchEvent(new Event('input'))

    tick()
    form.triggerEventHandler('ngSubmit', null)
    tick()
    fixture.detectChanges()

    expect(authService.login).toHaveBeenCalled()
  }))

  it('should not to call login when form event fire', fakeAsync(() => {
    const form = fixture.debugElement.query(By.css('form'))    
    authService.login.and.returnValue(of(true))

    tick()
    form.triggerEventHandler('ngSubmit', null)
    tick()
    fixture.detectChanges()

    expect(authService.login).not.toHaveBeenCalled()
  }))


});//end
