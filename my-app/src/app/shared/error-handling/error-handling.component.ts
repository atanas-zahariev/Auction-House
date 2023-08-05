import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ItemsService } from 'src/services/items.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent {

  constructor(private authService: AuthService, private itemService: ItemsService) {
    this.authService.cleanErrors()
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
