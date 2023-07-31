import { Component, } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) { 
    this.authService.cleanErrors()
  } 

  onSubmit() {
    const { email, password } = this.loginForm.value;


    if (Object.values(this.loginForm.value).some(x => !x)) {
      this.authService.Error = ['All fields are required!']
      return
    };

    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.authService.cleanErrors()
        this.router.navigate(['/'])

      },
      (error) => {
        this.authService.getError(error.error)
        this.loginForm.reset();
      }
    )
  }

}
