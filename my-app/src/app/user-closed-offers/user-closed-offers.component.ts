import { Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { itemI } from '../interfaces/itemInterfaces';

@Component({
  selector: 'app-user-closed-offers',
  templateUrl: './user-closed-offers.component.html',
  styleUrls: ['./user-closed-offers.component.css']
})
export class UserClosedOffersComponent {
  items: itemI[] = []
  hasLenght: boolean = false

  constructor(private itemsService: ItemsService) {
    this.itemsService.userClosedOffers().subscribe(
      (data) => {
        this.items = data.items;
        if (this.items.length > 0) {
          this.hasLenght = true;
        }

      },
      (error) => {
        this.itemsService.getError(error.error)
      }
    )
  }
}
