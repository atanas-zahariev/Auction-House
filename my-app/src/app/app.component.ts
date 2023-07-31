import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ItemsService } from './items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private authService: AuthService,  private itemService: ItemsService) {
    this.authService.cleanErrors()
   }

  get user(): string | null {
    return localStorage.getItem('user')
  }

  get errorArray(): string[] | undefined {
    if (this.authService.Error.length > 0) {
      return this.authService.Error
    } else if (this.itemService.Error.length > 0) {
      return this.itemService.Error
    } else {
      return
    }
  }
}









