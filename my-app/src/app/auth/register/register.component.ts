import { Component,  } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm = new FormGroup({
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    repass: new FormControl(''),
  })

  constructor(private authService: AuthService, private router: Router) {
    this.authService.cleanErrors()
  };


  onSubmit() {
    const { email, firstname, lastname, password, repass } = this.registrationForm.value

    const REGEX_FOR_Email = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/m

    if (Object.values(this.registrationForm.value).some(x => x == '')) {
      this.authService.Error = ['All fields are required!']
      return
    }

    if (email) {
      if (!REGEX_FOR_Email.test(email)) {
        this.authService.Error = ['Incorect email!']
        return
      }
    }

    if (firstname) {
      if (firstname.length < 2) {
        this.authService.Error = ['First name must be at least 2 characters!']
        return
      }
    }

    if (lastname) {
      if (lastname.length < 2) {
        this.authService.Error = ['Last name must be at least 2 characters!']
        return
      }
    }

    if (password) {
      if (password.length < 5) {
        this.authService.Error = ['Password must be at least 5 characters!']
        return
      }
    }

    if(password || repass){
      if(password != repass){
        this.authService.Error = ['The passwords do not match!']
        return
      }
    }

    this.authService.register(this.registrationForm.value).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/'])
        this.authService.cleanErrors()

      },
      (error) => {
        this.authService.getError(error.error)
        this.registrationForm.reset()
      }
    )

  }
}
