import { Component, } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private errorService: ErrorService,
    private authService: AuthService
  ) { }

  onSubmit() {

    if (Object.values(this.loginForm.value).some(x => !x)) {
      this.errorService.Error = ['All fields are required!']
      return
    };

    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.errorService.cleanErrors()
        this.router.navigate(['/'])

      },
      (error) => {
        this.errorService.getError(error.error)
        this.loginForm.reset();
      }
    )
  }

}
