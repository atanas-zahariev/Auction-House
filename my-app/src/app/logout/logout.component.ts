import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(
    private authService:AuthService,
    private route:Router
    ){
    const argument = localStorage.getItem('user')

      this.authService.logout(argument).subscribe(
        () => {
          localStorage.clear()
          this.route.navigate(['/'])
        },
        (error) => {
          this.authService.getError(error.error)
        }
      )
    }
}
